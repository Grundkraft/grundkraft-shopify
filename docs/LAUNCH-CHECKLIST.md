# GRUNDKRAFT Shopify Launch Checklist

Diese Liste trennt **Theme-Funktion** von den Dingen, die im Shopify-Admin gepflegt werden müssen.

## Theme-seitig erledigt

- Native Shopify Online Store 2.0 Struktur
- Startseite mit Hero, 3 Säulen, Arbeitstag, TAGWERK, Werkzeugkasten, Story, B2B, Community, Inhaltsstoffe, FAQ und Newsletter
- Produktseiten mit Medien, Varianten, Preis, Bestand/Verfügbarkeit, SKU, Menge, Warenkorb und dynamischem Checkout
- Kollektionsseiten mit Produktgrid, Sortierung, Pagination und Leerzustand
- Warenkorb mit Mengenänderung, Entfernen, Rabatten, Bestellnotiz, Checkout und Zahlungsarten
- Suche, 404, Seiten, Blog, Artikel und Kollektionsübersicht
- Kontaktseiten-Template mit nativem Shopify-Kontaktformular
- Passwortseite mit Shop-Passwort und optionaler E-Mail-Anmeldung
- Geschenkkarten-Template mit Code, QR-Code und Apple Wallet
- Kundenkonto-Link, sofern Shopify-Kundenkonten aktiviert sind
- Favicon- und Social-Sharing-Setting
- OpenGraph/Twitter-Metadaten und strukturierte Produkt-/Artikel-Daten
- Custom-Liquid-Section als App-/Integrations-Einfügepunkt
- Mobile Navigation und responsive Layouts
- Shopify Theme Check Workflow in GitHub

## Vor echtem Verkaufsstart im Shopify-Admin erledigen

### 1. Produkte

Für jedes Produkt:
- Titel
- Status aktiv
- Verkaufskanal **Onlineshop** aktivieren
- Preis
- Steuersituation prüfen
- Varianten, falls vorhanden
- Bestand / Weiterverkaufen-bei-0-Regel bewusst einstellen
- Produktbilder hochladen
- Beschreibung
- finale Zutaten / Pflichtangaben
- Anwendungshinweise
- rechtlich geprüfte Claims

Die Startseite versucht TAGWERK, STANDFEST und KRAFTRESERVE automatisch zuerst über den Handle und danach über den Produkttitel zu finden. Saubere Handles sind trotzdem empfohlen:
- `tagwerk`
- `standfest`
- `kraftreserve`

### 2. Optionales Metafeld für Inhaltsstoffe

Namespace/Key:
- `custom.ingredients`

Dieses Feld kann auf der Produktseite automatisch als aufklappbarer Abschnitt erscheinen.

### 3. Kontaktseite

- Shopify Admin → Onlineshop → Seiten
- Seite `Kontakt` erstellen
- Theme-Template `contact` zuweisen

### 4. Navigation

Das Theme funktioniert bereits mit seiner eingebauten GRUNDKRAFT-Navigation.

Optional kann im Theme Editor beim Header `Shopify-Menü verwenden` aktiviert und ein eigenes Navigationsmenü ausgewählt werden.

### 5. Zahlungen

Shopify Admin → Einstellungen → Zahlungen

Mindestens einen tatsächlich nutzbaren Zahlungsanbieter aktivieren und Testbestellung durchführen.

### 6. Versand

Shopify Admin → Einstellungen → Versand und Zustellung

Prüfen:
- Versandzonen
- Versandpreise
- kostenloser Versand, falls gewünscht
- Paketgewichte
- Lieferländer / Märkte

### 7. Rechtliches

Shopify Admin → Einstellungen → Richtlinien

Vor Veröffentlichung mit eigenen finalen Texten pflegen:
- Datenschutz
- AGB
- Versand
- Widerruf / Rückgabe
- Impressum über eine normale Shopify-Seite

Keine Platzhaltertexte als echte Rechtstexte verwenden.

### 8. Domain und Absender

- eigene Domain verbinden
- primäre Domain setzen
- Absender-E-Mail authentifizieren
- Bestell- und Versandmails testen

### 9. Kundenkonten

Falls gewünscht in Shopify aktivieren. Der Header blendet den Konto-Link dann automatisch ein.

### 10. Theme Branding

Theme Editor → Theme Settings:
- Logo optional hochladen
- Favicon hochladen
- Social-Sharing-Bild hochladen
- Farben / Fonts nur ändern, wenn die GRUNDKRAFT-CI bewusst angepasst werden soll

### 11. Passwortseite

Solange der Shop nicht öffentlich sein soll:
- Passwortschutz aktiv lassen
- Passwortnachricht im Shopify-Admin pflegen

Das Theme zeigt diese Nachricht automatisch an.

### 12. Test vor Veröffentlichung

Desktop + Smartphone prüfen:
- Startseite
- Produkt öffnen
- Variante wechseln
- Produktbild wechseln
- in Warenkorb legen
- Menge ändern
- Produkt entfernen
- Suchfunktion
- Kontaktformular
- Newsletter
- Checkout bis zur Zahlungsseite
- Passwortseite
- 404-Seite

Zusätzlich mindestens eine echte Testbestellung durchführen.

## Produkt- und Rechtsstatus

Das Theme selbst darf keine noch unbestätigten Rezepturen, Dosierungen, Health Claims, Zertifizierungen oder Herkunftsangaben als Tatsachen ausgeben. Finale Produktangaben müssen vor Verkaufsstart vom tatsächlichen Produkt, Hersteller und der rechtlichen Kennzeichnung kommen.
