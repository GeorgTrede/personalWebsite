# Georg Trede — persönliche Webseite

Statischer, responsiver Entwurf ohne externe Schriftarten, Frameworks oder Build-Abhängigkeiten.

## Lokal starten

```sh
cd /workspace/personalWebsite
python3 -m http.server 8000 --bind 0.0.0.0
```

## Inhalte

Forschungsprofil und Projekte stammen aus der bisherigen Webseite. Das erste Paper und die Zugehörigkeiten sind anhand von arXiv verifiziert; siehe `docs/content-sources.md`. Bachelor- und Masterarbeit werden später ergänzt. Der LinkedIn-Profillink wurde direkt vom Nutzer bestätigt.

Diese Version ist eine Vorschau. Vor dem Einsatz als Hauptwebseite gegebenenfalls erforderliche rechtliche Angaben ergänzen.

## GitHub Pages

Ein manuell auslösbarer Workflow liegt in `.github/workflows/pages.yml`. Die Dateien liegen bereits auf `main`. Unter Settings → Pages die Quelle **GitHub Actions** auswählen und unter Actions den Workflow **Publish website to GitHub Pages** manuell starten. Der Workflow veröffentlicht nur `index.html` und `styles.css`. Es wird keine eigene Domain gesetzt; die bestehende Webseite bleibt somit unberührt. Die Vorschau wurde erfolgreich veröffentlicht: https://georgtrede.github.io/personalWebsite/
