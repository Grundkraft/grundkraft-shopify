# Korrekturen nach Nutzerprüfung

Ausgangspunkt: `0927ca35a5ad6870ef28710bef4981a699dcea5b`, unveränderter Remote-Stand des bestehenden PR #1. Die bestätigte Gestaltung bleibt erhalten.

1. Logo mit gefülltem, kantigem G und schmaler Schriftkontur neu am Original-Mockup ausgerichtet. Header und Footer verwenden dieselbe `gk-logo`-Snippet samt einheitlichem Händlerlogo-Override.
2. Warenkorbsymbol von 17 auf 29 px vergrößert. Artikelzahl rechts daneben mit 1,1 rem, ohne Schrumpfen/Umbruch. Die Suchlupe bleibt auch bei 320 px sichtbar; Logo und Aktionsleiste passen sich an.
3. „Für echte Arbeitstage“ auf 0,88 rem vergrößert und mit 16 px unterem Abstand versehen.
4. Pluszeichen als zwei geometrische, in derselben Kreisfläche zentrierte Linien umgesetzt. Keine von Schriftmetriken abhängige Positionierung mehr.
5. Story-G aus dem bestätigten Hero abgeleitet; Struktur und Herkunft in `METAL-G-MASTER.md` festgehalten. Das Personen-Hero bleibt bytegleich.
6. Schwarzes G auf allen drei Dosen gemeinsam um 14 SVG-Einheiten nach oben verschoben.
7. Zeitkarten als vertikale Flex-Layouts; orange Linie mit automatischem oberen Abstand am Kartenboden. Gleiche Höhe je Grid-Zeile, gleicher unterer Abstand bei einspaltigem Mobil-Layout.
8. Macher-Abzeichen aus absoluter Positionierung in den normalen Layoutfluss überführt; fester Mindestabstand nach dem Text und nicht schrumpfendes Sechseck.

## Geprüft

- Shopify CLI Theme Check: `[]`, Exit 0. `git diff --check` erfolgreich.
- Lokale LiquidJS-/Chrome-Vorschauen bei 320, 390, 768, 1024 und 1440 px: kein Seitenüberlauf, alle Bilder dekodiert, keine JavaScript-Ausnahmen.
- Zeitlinien je Kartenzeile auf gleicher Höhe; Abstand zum Kartenboden jeweils 23 px einschließlich Rand.
- Macher-Abzeichen unterhalb des Textblocks; Sechseck und Beschriftung ohne Überlagerung.
- Gleiche Logoquelle in Header und Footer.
- Warenkorbanzeigen mit 0, 12 und 999 Artikeln geprüft; Zahl rechts vom 29-px-Symbol, Suche sichtbar, Logo und Aktionsleiste ohne Überlagerung.
- Bestehende Navigation/Karussell und Produktvariantenwechsel erneut lokal geprüft.
- Desktop- und Mobile-Bilder von Hero, Produktfamilie, Story, Zeitkarten, Macher und Footer kontrolliert.

Die Vorschau verwendet lokale Fixtures. Echte Shopify-Formularübermittlung, Warenkorb/Checkout, Bestand und Theme-Editor bleiben in einem unveröffentlichten Shopify-Theme zu prüfen. Keine Veröffentlichung und kein Merge.
