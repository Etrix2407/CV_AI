# CV — Projet

CV en page web, généré à partir d'un fichier Markdown.

## Structure

```
CV.md            # contenu du CV (front matter + Markdown) — seule source du texte
assets/          # photo et fichiers statiques
template.html    # template Jinja2 (mise en page + CSS)
build.py         # génère docs/index.html à partir de CV.md
docs/            # site généré (publiable via GitHub Pages)
requirements.txt
```

## Commandes

```bash
pip install -r requirements.txt   # markdown-it-py, python-frontmatter, jinja2
python build.py                   # génère docs/index.html
```

Après toute modification de `CV.md`, `template.html` ou `build.py`, relancer `python build.py` et vérifier que la génération passe sans erreur.

## Règles de contenu

- Ne jamais écrire de texte du CV en dur
- Ne jamais inventer ni modifier des faits (dates, postes, entreprises, chiffres, compétences). Si une information manque ou semble incohérente, poser la question.
- Langue du CV : français, sauf indication contraire.


## Règles de code

- Python 3, code simple et lisible, sans dépendance superflue.
- Ne pas ajouter de framework web (Flask, Django, etc.) ni de bibliothèque front sans demande explicite.

## Workflow Git

- La branche `main` est protégée : ne jamais pousser directement dessus.
- Pour toute modification : créer une branche (`git checkout -b <nom-court>`), committer, pousser la branche, puis ouvrir une pull request.
- Messages de commit courts, à l'impératif, en français (ex. : « Ajoute la section compétences »).
- Un commit = un changement cohérent.
- Ne jamais utiliser `git push --force`, `git reset --hard` ni supprimer de branche distante.
- Demander confirmation avant chaque commit et chaque push.
- Ne jamais committer de secrets, de clés API ou de données personnelles non destinées à être publiques (adresse postale complète, numéro de téléphone, etc.) sans validation.

## Avant de terminer une tâche

