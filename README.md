# CV_AI

CV en page web, généré à partir de [content/cv.md](content/cv.md).

```bash
pip install -r requirements.txt
python build.py
```

Ouvrir ensuite `docs/index.html` dans un navigateur.

| Dossier | Rôle |
|---|---|
| `content/` | Texte du CV (Markdown) |
| `templates/` | Structure HTML (Jinja2) |
| `assets/` | CSS et images sources |
| `docs/` | Site produit — ne pas modifier à la main |
