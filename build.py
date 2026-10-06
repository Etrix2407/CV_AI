"""Génère le CV en page web (docs/) à partir de content/cv.md."""

import re
import shutil
import unicodedata
from pathlib import Path

import frontmatter
from jinja2 import Environment, FileSystemLoader
from markdown_it import MarkdownIt

ROOT = Path(__file__).parent
CONTENT = ROOT / "content" / "cv.md"
TEMPLATES = ROOT / "templates"
ASSETS = ROOT / "assets"
OUTPUT = ROOT / "docs"


def slugify(text):
    """Transforme un titre en identifiant d'ancre (sans accents ni espaces)."""
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def split_sections(content):
    """Découpe le Markdown en sections sur les titres de niveau 2."""
    md = MarkdownIt("commonmark")
    sections = []
    for block in re.split(r"^## ", content, flags=re.MULTILINE)[1:]:
        title, _, body = block.partition("\n")
        title = title.strip()
        sections.append({"title": title, "id": slugify(title), "html": md.render(body)})
    return sections


def as_url(value):
    """Ajoute https:// à une adresse web qui n'en a pas."""
    return value if value.startswith("http") else f"https://{value}"


def build_contacts(meta):
    """Liste ordonnée des contacts : type (pour l'icône), texte affiché, lien éventuel."""
    contacts = []
    if meta.get("email"):
        contacts.append({"kind": "email", "label": meta["email"], "href": f"mailto:{meta['email']}"})
    if meta.get("phone"):
        phone = str(meta["phone"])
        contacts.append({"kind": "phone", "label": phone, "href": "tel:" + re.sub(r"[^\d+]", "", phone)})
    if meta.get("address"):
        contacts.append({"kind": "address", "label": meta["address"], "href": None})
    for kind in ("linkedin", "github"):
        if meta.get(kind):
            url = as_url(meta[kind])
            contacts.append({"kind": kind, "label": re.sub(r"^https?://", "", url), "href": url})
    return contacts


def main():
    cv = frontmatter.load(CONTENT)
    meta = {key.lower(): value for key, value in cv.metadata.items()}

    # docs/ est entièrement régénéré : sources et résultat ne se mélangent jamais.
    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    shutil.copytree(ASSETS, OUTPUT / "assets")

    photo = meta.get("photo")
    photo_src = f"assets/images/{photo}" if photo and (ASSETS / "images" / photo).is_file() else None

    env = Environment(loader=FileSystemLoader(TEMPLATES), autoescape=True)
    html = env.get_template("index.html").render(
        meta=meta,
        photo=photo_src,
        contacts=build_contacts(meta),
        sections=split_sections(cv.content),
    )
    (OUTPUT / "index.html").write_text(html, encoding="utf-8")
    print(f"CV généré : {(OUTPUT / 'index.html').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
