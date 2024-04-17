
Willkommen zur Bibliothek Spandau README

Hier ist eine grundlegende Anleitung zur Implementierung der Funktionen für die Benutzerregistrierung, das Einloggen, das Hinzufügen eines Buches und das Hinzufügen eines Profilbilds. Bitte beachte, dass dies nur ein Leitfaden ist und du möglicherweise Anpassungen vornehmen musst, um sie an deine spezifischen Anforderungen anzupassen.

**Registrierung und Anmeldung:**

****Firebase Authentication einrichten:****

Folge den Anweisungen auf der Firebase-Website, um Firebase Authentication in dein Projekt zu integrieren.
Konfiguriere die Anmeldung mit E-Mail und Passwort sowie ggf. andere Authentifizierungsmethoden nach Bedarf.

**1-- Registrierung:**

Erstelle ein Registrierungsformular in deiner Anwendung, das Benutzer zur Eingabe ihrer E-Mail-Adresse und ihres Passworts auffordert.
Verwende die Firebase Authentication-API, um ein neues Benutzerkonto zu erstellen, wenn das Formular abgeschickt wird.

**2-- Anmeldung:**

Erstelle ein Anmeldeformular, das Benutzer zur Eingabe ihrer E-Mail-Adresse und ihres Passworts auffordert.
Verwende die Firebase Authentication-API, um Benutzer anzumelden, wenn das Formular abgeschickt wird.

**Hinzufügen eines Buches:**

 - **Firebase Firestore einrichten:**
Konfiguriere Firebase Firestore als deine Datenbank für die Speicherung von Bücherinformationen.
 - **Formular zum Hinzufügen eines Buches erstellen:**
Erstelle ein Formular, das Benutzer zur Eingabe von Buchinformationen wie Titel, Autor, Genre usw. auffordert.
 - **Daten in Firestore speichern:**
verwende die Firestore-API, um die eingegebenen Buchinformationen in deiner Firestore-Datenbank zu speichern, wenn das Formular abgeschickt wird.

 **3--  Profilbild hinzufügen:**

- **Datei-Upload-Funktionalität einrichten:**
Erstelle eine Möglichkeit für Benutzer, Bilder hochzuladen, entweder durch die Verwendung eines Datei-Upload-Formulars oder einer Dateiauswahl-Schnittstelle.
- **Bild in Firebase Storage speichern:**
Verwende Firebase Storage, um das hochgeladene Bild zu speichern.
- **Profilbild-URL in Firestore speichern:**
Speichere den Download-URL des Profilbilds in der Benutzerdatenbank in Firestore.

**4  Löschen des Accounts:**

- **Lösch-Option bereitstellen:**
Füge eine Option in das Benutzerprofil hinzu, die es Benutzern ermöglicht, ihren Account zu löschen.
- **Account löschen:**
Verwende die Firebase Authentication-API, um den aktuellen Benutzeraccount zu löschen, wenn die Lösch-Option ausgewählt wird.
Lösche auch alle zugehörigen Daten des Benutzers aus der Firestore-Datenbank und dem Storage, falls erforderlich.
Vielen Dank für deine Unterstützung und viel Spaß beim Lesen in der Bibliothek Spandau!

## Functionality

The Hotel Booking System allows users to:

- **api**: Contains the backend code for the Hotel Booking System.
  - **service**: Directory for service-related files.
  - **src**: Source files for backend functionality.
  - **.env**: Environment variables configuration file.
  - **.gitignore**: Git ignore file.
  - **index.js**: Entry point for the backend application.
  - **package-lock.json**: Dependency lock file.
  - **package.json**: Node.js package configuration file.
  - **Middleware hinzufügen: Verwende Middleware**  CORS.
  - **servise** BD , die Connection BibliothekApp to DB established!.
  - **Body-Parser und Multer** um HTTP-Anfragen zu verarbeiten Dateien hochzuladen und die Kommunikation zwischen Frontend und Backend zu ermöglichen.
 



Frontend (React):
- **frontend**: Contains the frontend code for the Hotel Booking System.
  - **public**: Public assets directory.
  - **src**: Source files for frontend components.
  - **pages** erhählt page seits.
  - **README.md**: Readme file for frontend.
  - **package-lock.json**: Dependency lock file.
  - **package.json**: Node.js package configuration file.
  - **Axios** , um HTTP-Anfragen an die Backend-API-Endpunkte zu senden und Daten von der Datenbank abzurufen.
Backend (Node.js/Express).
  -**react-router-dom**
  -**react-icons** 



