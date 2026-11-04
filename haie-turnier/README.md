# U9 TIWAG HAIE TURNIER 2027

Kompakte, zweisprachige statische Turnierhomepage. Keine Installation und kein Build nötig. Die Website wird ausschließlich als Vorschau bereitgestellt; noch nicht öffentlich veröffentlicht.

## Dateien und Pflege

- `dist/index.html`: Seitenstruktur, Turniername und Datum, Originalgrafiken.
- `dist/content.js`: Teilnehmerlinks, Siegerdaten und vollständige deutsche/englische Texte.
- `dist/styles.css`: Gestaltung und responsive Ansichten. Vereinsblau `#28367d`, Rot `#d82021`; aus den gelieferten Vereinsgrafiken abgeleitet, noch keine schriftlich bestätigten CI-Farbwerte.
- `dist/app.js`: Sprachwechsel, mobile Navigation und Hall of Fame.
- `dist/assets/`: Originaldateien, unverändert übernommen.

In `content.js` lassen sich Formularlinks und Hall-of-Fame-Einträge ändern. `logo: null` zeigt ein neutrales Pokalsymbol. Nach Erhalt eines Siegerlogos Datei nach `dist/assets/` kopieren und z. B. `logo: 'assets/winner-2024.png'` eintragen. Unbekannte Sieger werden ausdrücklich als offen angezeigt. 2023: HC TIWAG Innsbruck laut Veranstalter; 2027 steht noch nicht fest.

Tournify ist vollständig für 2027 vorbereitet. In `dist/content.js` unter `links.tournify` den echten Teilnehmerlink für 2027 statt `null` eintragen. Die Schaltfläche wird dann automatisch aktiviert und der Hinweis „Link folgt“ ausgeblendet. Ohne Link öffnet sie keine Seite. Es wird kein unbestätigtes iframe verwendet.

## Lokal ansehen

Mit einem lokalen Webserver das Verzeichnis `dist` ausliefern, z. B. `python3 -m http.server 8080 --directory dist`, und die ausgegebene Adresse öffnen. Die Seite benötigt keine externen Schriftanbieter, Analysewerkzeuge oder Cookies. Nur die Sprachauswahl wird lokal im Browser gespeichert. Externe Dienste werden erst beim Klick auf ihre Links geöffnet.

## GitHub Pages – erst nach Freigabe veröffentlichen

1. Dateien dieses Projekts in das gewünschte GitHub-Repository übernehmen.
2. In GitHub unter Settings → Pages die gewünschte Veröffentlichungsart wählen. `dist/` enthält die vollständige Website; bei einer separaten Pages-Veröffentlichung dessen Inhalt als Webroot übernehmen.
3. Vor Freischaltung Betreiber-, Kontakt-, Impressums- und Datenschutzhinweise mit den tatsächlichen Veranstalterdaten vervollständigen. Der sichtbare Vorschauhinweis im Footer ist kein Ersatz dafür.
4. Mobile Ansicht, beide Sprachen und die Formularlinks nach dem Upload prüfen.

Keine Zugangsdaten oder Formularantworten gehören in dieses Repository. Kinderfotos werden nicht automatisch aus Formularen übernommen.

## Noch vom Veranstalter zu ergänzen

- Bestätigte Betreiber- und Kontaktangaben sowie finaler Text für Impressum/Datenschutz.
- Optional: freigegebene Siegerfotos ergänzen. Die Sieger 2023–2026 und ihre Logos sind bereits hinterlegt.
- Tournify-Teilnehmerlink für 2027.
- Falls vorhanden: verbindliche CI-Schrift- und Farbdefinitionen. Original-Logos werden bereits unverändert verwendet.

## Herkunft der Inhalte

Turnierdatum, Veranstaltungsort, Sieger 2023 und Formular-/Tournify-Links: Angaben des Veranstalters in diesem Projekt. Logos und Silhouette: bereitgestellte Originaldateien. Vereinsreferenz: https://www.hcinnsbruck.at/ . Keine Preise, Spielzeiten oder Turnierergebnisse ergänzt, die nicht bestätigt wurden.

## Animierte Fotofassung

Die vier neu bereitgestellten Originalfotos sind als vollständige JPEG-Dateien unverändert eingebunden. Einstiegsbilder wechseln mit weicher Überblendung und langsamem Zoom vom leicht verkleinerten zum vollständigen Bild. So wird kein Motiv abgeschnitten. Die Galerie öffnet die Fotos in einer vergrößerten Ansicht; Escape und Schließen beenden sie.

Automatischer Wechsel alle 6,5 Sekunden; pausierbar und manuell vor/zurück bedienbar. Automatik pausiert bei Mausberührung, Tastaturfokus, geöffnetem Foto, verdecktem Browser-Tab und außerhalb des sichtbaren Bereichs. Bei reduzierter Bewegung startet kein automatischer Bildwechsel und es gibt keine Zoom-/Einblendanimationen. Bildtexte und Bedienung sind Deutsch/Englisch. Fotos ergänzen: `photos` in `content.js`, passende Bilder in `index.html` und die Galerie-Logik abgleichen.

Referenzseite https://www.hcinnsbruck.at/ wurde als Vereinsreferenz abgerufen. Die Animationen sind eine eigene Umsetzung mit den gelieferten Motiven, keine Übernahme fremden Quellcodes. Browserprüfung war wegen des nicht verfügbaren Vorschau-Dienstes nicht möglich; JavaScript-Syntax, Seitenelemente und Interaktionslogik werden separat geprüft. Die Darstellung auf realen Endgeräten bleibt noch zu prüfen.

## CI- und Hall-of-Fame-Update

Alle Website-Texte sind auf Veranstalterwunsch weiß; Hintergrundflächen in dunklem Vereinsblau. Originalgrafiken unverändert. Hall of Fame mit geschichteten 3D-Karten, Pokalpodest und dezenter Mausneigung. Bei reduzierter Bewegung statisch, auf Touch-Geräten ohne Mausneigung. Bestehende Siegerdaten und Platzhalter unverändert.

## Seitenweiter Fotohintergrund

Die vier Fotos bilden jetzt eine einzige gemeinsame Hintergrund-Fotoshow hinter allen Seitenbereichen. Überblendung alle 10 Sekunden, dunkelblauer Filter für weiße Schrift, ruhige Zoombewegung. Vor-/Zurück- und Pausenbedienung befinden sich beim Turnierlogo. Kein zweiter automatischer Foto-Einstieg. Die Galerie bleibt unverändert. Der Hintergrund läuft auch unterhalb des Einstiegs weiter; pausiert bei ausgeblendetem Tab und geöffnetem Foto. Bei reduzierter Bewegung startet er statisch. Die Inline-Vorschau verwendet kleinere eingebettete Bilder; die Projektdateien behalten die Originalfotos.

## Aktueller Foto-Einstieg

Fotohintergrund auf ausdrücklichen Wunsch ausschließlich innerhalb des Hero-Bereichs, über dessen volle Breite und mindestens die erste Bildschirmhöhe abzüglich Navigation. Fotos sind durch einen schwächeren, gerichteten blauen Filter sichtbar kräftiger; hinter dem Text stärkerer Kontrast. Alle nachfolgenden Abschnitte wieder mit deckenden dunklen Flächen. Automatik pausiert zusätzlich, sobald der Einstieg nicht sichtbar ist. Die Inline-Vorschau nutzt eine begrenzte Einstiegshöhe, um die automatische Größenanpassung des Vorschaurahmens stabil zu halten; die eigentliche Website verwendet die Browserhöhe.

## Bestätigte Hall of Fame

2023 HC TIWAG Innsbruck; 2024 SC Rheintal Future; 2025 USG Zoldo; 2026 HC TIWAG Innsbruck. Quelle: aktuelle Veranstalterangaben. Die drei beigefügten Original-Logos werden unverändert eingebunden, HCI für 2023 und 2026. 2027 bleibt offen. Generierte illustrative Vorschau ist kein Ersatz für diese Originaldateien.

## Silhouette und Tournify 2027

Die Original-Hai-Silhouette erscheint als dezentes transparentes Hintergrundmotiv in Teamvorbereitung und Hall of Fame unterhalb des Einstiegs. Der Foto-Einstieg bleibt unverändert. Tournify-Jahreszahl und Texte sind Deutsch/Englisch auf 2027 umgestellt. Der 2026-Archivlink wurde aus der Website entfernt; die historische Hall of Fame bleibt unverändert.
