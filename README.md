<img width="575" alt="Bildschirmfoto 2024-08-01 um 11 32 05" src="https://github.com/user-attachments/assets/9ef49a1f-3f0b-4f1c-b7bf-e211262155b1">
<img width="438" alt="Bildschirmfoto 2024-08-01 um 11 33 18" src="https://github.com/user-attachments/assets/7ac53dc8-76f6-47ce-aef8-20cfa3ce4f2a">



<img width="618" alt="Bildschirmfoto 2024-08-01 um 11 21 01" src="https://github.com/user-attachments/assets/58a81f6e-74fe-42c4-9332-eba878be88af">
<img width="1169" alt="Bildschirmfoto 2024-08-01 um 11 29 25" src="https://github.com/user-attachments/assets/158a20c7-0f7e-4211-b13a-e9df536b1de5">

<img width="1053" alt="Bildschirmfoto 2024-08-01 um 11 29 46" src="https://github.com/user-attachments/assets/16663aa6-fab1-4d7f-abdd-77e00ca6a8ce">
<img width="1168" alt="Bildschirmfoto 2024-08-01 um 11 28 17" src="https://github.com/user-attachments/assets/7adfb451-a3c3-40b0-9279-522bade643ce">



####### -------- #########
 # Willkommen zur Bibliothek Spandau README #

Dieses Projekt präsentiert die Bibliothek Spandau, eine virtuelle Bibliotheksanwendung, die es Benutzern ermöglicht, Bücher zu durchsuchen, auszuleihen, hinzuzufügen und zu lesen, insbesondere solche, die sich auf die Bezirke Berlins beziehen.




# Registrierung und Anmeldung:

****Firebase Authentication einrichten:****

Folge den Anweisungen auf der Firebase-Website, um Firebase Authentication in dein Projekt zu integrieren.
Konfiguriere die Anmeldung mit E-Mail und Passwort sowie ggf. andere Authentifizierungsmethoden nach Bedarf.

## Registrierung:

Erstelle ein Registrierungsformular in deiner Anwendung, das Benutzer zur Eingabe ihrer E-Mail-Adresse und ihres Passworts auffordert.
Verwende die Firebase Authentication-API, um ein neues Benutzerkonto zu erstellen, wenn das Formular abgeschickt wird.

## Anmeldung:

Erstelle ein Anmeldeformular, das Benutzer zur Eingabe ihrer E-Mail-Adresse und ihres Passworts auffordert.
Verwende die Firebase Authentication-API, um Benutzer anzumelden, wenn das Formular abgeschickt wird.

### Hinzufügen eines Buches:

  - **Firebase Firestore einrichten:**
Konfiguriere Firebase Firestore als deine Datenbank für die Speicherung von Bücherinformationen.
   - **Formular zum Hinzufügen eines Buches erstellen:**
Erstelle ein Formular, das Benutzer zur Eingabe von Buchinformationen wie Titel, Autor, Genre usw. auffordert.
   - **Daten in Firestore speichern:**
verwende die Firestore-API, um die eingegebenen Buchinformationen in deiner Firestore-Datenbank zu speichern, wenn das Formular abgeschickt wird.

 ##  Profilbild hinzufügen:

 - **Datei-Upload-Funktionalität einrichten:**
Erstelle eine Möglichkeit für Benutzer, Bilder hochzuladen, entweder durch die Verwendung eines Datei-Upload-Formulars oder einer Dateiauswahl-Schnittstelle.
  - **Bild in Firebase Storage speichern:**
Verwende Firebase Storage, um das hochgeladene Bild zu speichern.
  - **Profilbild-URL in Firestore speichern:**
Speichere den Download-URL des Profilbilds in der Benutzerdatenbank in Firestore.

##  Löschen des Accounts:

  - **Lösch-Option bereitstellen:**
Füge eine Option in das Benutzerprofil hinzu, die es Benutzern ermöglicht, ihren Account zu löschen.
  - **Account löschen:**
Verwende die Firebase Authentication-API, um den aktuellen Benutzeraccount zu löschen, wenn die Lösch-Option ausgewählt wird.
Lösche auch alle zugehörigen Daten des Benutzers aus der Firestore-Datenbank und dem Storage, falls erforderlich.
Vielen Dank für deine Unterstützung und viel Spaß beim Lesen in der Bibliothek Spandau!

## Functionality

Das Bibliothek Spandau README System ermöglicht Benutzern:

- **api**: Enthält den Backend-Code für das Hotelbuchungssystem.
  - **service**: Verzeichnis für servicebezogene Dateien.
  - **src**: Quellcode für die Backend-Funktionalität.
  - **.env**: Konfigurationsdatei für Umgebungsvariablen.
  - **.gitignore**: Datei für Git-Ignore-Regeln..
  - **index.js**: Einstiegspunkt für die Backend-Anwendung.
  - **package-lock.json**: Abhängigkeitssperrdatei.
  - **package.json**: Konfigurationsdatei für Node.js-Pakete.
  - **Middleware hinzufügen: Verwende Middleware**  Verwende Middleware CORS.
  - **servise** BD , Die Verbindung zur BibliothekApp-Datenbank wurde hergestellt!.
  - **Body-Parser und Multer** Um HTTP-Anfragen zu verarbeiten, Dateien hochzuladen und die Kommunikation zwischen Frontend und Backend zu ermöglichen.
 



Frontend (React):
- **frontend**: Enthält den Frontend-Code für das Hotelbuchungssystem.
  - **public**: Verzeichnis für öffentliche Ressourcen.
  - **src**: Quellcode für Frontend-Komponenten.
  - **pages** erhählt page seits.
  - **README.md**: Readme-Datei für das Frontend.
  - **package-lock.json**: Abhängigkeitssperrdatei.
  - **package.json**: Konfigurationsdatei für Node.js-Pakete.
  - **Axios** ,Um HTTP-Anfragen an die Backend-API-Endpunkte zu senden und Daten von der Datenbank abzurufen.
  -**react-router-dom**
  -**react-icons** -react-router-dom -react-icons



