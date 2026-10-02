# Georg Trede — persönliche Webseite

Statischer, responsiver Entwurf ohne externe Schriftarten, Frameworks oder Build-Abhängigkeiten.

## Lokal starten

```sh
cd /workspace/personalWebsite
python3 -m http.server 8000 --bind 0.0.0.0
```

## Inhalte

Forschungsprofil und Projekte stammen aus der bisherigen Webseite. Das erste Paper und die Zugehörigkeiten sind anhand von arXiv verifiziert; siehe `docs/content-sources.md`. Bachelor- und Masterarbeit sind zusammengefasst und auf Anfrage erhältlich. Der LinkedIn-Profillink wurde direkt vom Nutzer bestätigt.

Diese Version ist eine Vorschau. Vor dem Einsatz als Hauptwebseite gegebenenfalls erforderliche rechtliche Angaben ergänzen.

## Optimierte Assets

Die Startseite verwendet responsive WebP-Fotos und lokal gespeicherte WOFF2-Schriften. Die ursprünglichen JPEGs bleiben als Browser-Fallback erhalten; die ursprünglichen TTF-Dateien dienen als Quelle. Zum Betreiben der Webseite sind weiterhin keine Build-Schritte oder Python-Pakete erforderlich.

Nur zum erneuten Erzeugen der optimierten Dateien:

```sh
python3 -m venv /tmp/personal-website-assets
/tmp/personal-website-assets/bin/pip install Pillow fonttools brotli
/tmp/personal-website-assets/bin/python scripts/optimize_assets.py
```

Mobile Layouts wurden im Browser bei 320, 360, 390 und 700 Pixel Breite geprüft, Tablet und Desktop bei 768 und 1440 Pixeln. Die Prüfung umfasst horizontales Überlaufen, Navigation und Sprungziele, Bild- und Schriftdateien, das Öffnen der Projekte sowie den Lorenz-Regler.

## GitHub Pages

Ein manuell auslösbarer Workflow liegt in `.github/workflows/pages.yml`. Die Dateien liegen bereits auf `main`. Unter Settings → Pages die Quelle **GitHub Actions** auswählen und unter Actions den Workflow **Publish website to GitHub Pages** manuell starten. Der Workflow veröffentlicht `index.html`, `styles.css`, `lorenz.js` und die lokalen Dateien unter `assets/`. Der Workflow selbst setzt keine eigene Domain. Die GitHub-Pages-Adresse ist https://georgtrede.github.io/personalWebsite/; eine unter Settings → Pages eingetragene eigene Domain führt zu einer Weiterleitung dorthin. Nach der Veröffentlichung sowohl den Workflow als auch die tatsächliche Zieladresse prüfen.
