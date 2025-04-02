# **Esercizio: node-libreria** 

Per consolidare i concetti legati a CRUD, REST, routing, controller e middleware con Express, vi propongo una breve esercitazione pratica in team.
## Obiettivo
Costruire una semplice REST API per gestire una libreria di 
libri, applicando una struttura modulare e pulita del codice.

---
### *Struttura consigliata del progetto*
---
node-library
- controllers
    - bookController.js
- middlewares
    - logger.js
    - validateBook.js
- routes
    - bookRoutes.js
- data
    -  books.json (mock DB)
- app.js

---
### *Funzionalità richieste*
Implementare le seguenti rotte:

- GET /books → Elenco di tutti i libri
- GET /books/:id → Dettaglio di un libro
- POST /books → Creazione di un nuovo libro
- PUT /books/:id → Modifica di un libro esistente
- DELETE /books/:id → Eliminazione di un libro

Ogni libro ha:

{

  "id": 1,

  "title": "Il nome della rosa",

  "author": "Umberto Eco",

  "year": 1980,

  "available": true

}

---
### Middleware richiesti

- Logger: stampa in console metodo e URL per ogni richiesta
- Validazione: blocca POST e PUT se mancano title o author
- Filtro per autore: GET /books?author=Eco (facoltativo)
- Endpoint solo libri disponibili GET /books/available (facoltativo)

---
#### *Cosa consegnare*
- Progetto funzionante
- Collection Postman
- Codice organizzato e leggibile
- README con istruzioni di avvio e test del progetto 

---

## **Istruzioni di avvio**
- Creato file app.js; 
- Inizializzato node tramite terminale (comando: "*node init -y*");
- All'interno del file "package.json";
    - Creato script "start":"node app.js"; 
    - Creato script "dev":"node --watch app.js"; 
- Installato express tramite terminale (comando: "*npm install express*");
- Attivato server locale su porta 10000 (*app.listen(port...)*);
- Attivato refresh automatico del server attraverso terminale (comando: "*npm run dev*").

---