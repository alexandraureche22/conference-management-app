# conference-management-app

**Descriere generală**
Acest proiect reprezintă o aplicație web pentru organizarea conferințelor științifice, care permite gestionarea conferințelor, trimiterea articolelor și evaluarea acestora printr-un proces de tip peer-review.
Aplicația este realizată sub forma unei Single Page Application (SPA) și respectă o arhitectură client–server, cu un back-end RESTful și un front-end bazat pe componente.

**Tehnologii utilizate**
**Back-end**
  Node.js
  Express.js
  Sequelize ORM
  PostgreSQL
  REST API
**Front-end**
  React.js
  React Router
  Axios
  Vite

**Arhitectură aplicație**
Aplicația este structurată pe două componente principale:
Back-end – expune un API REST care gestionează logica de business și persistența datelor]
Front-end – aplicație SPA care comunică cu back-end-ul prin cereri HTTP

**Tipuri de utilizatori**
Aplicația definește trei tipuri de utilizatori:
Organizer – creează conferințe și monitorizează articolele
Author – trimite articole și poate încărca versiuni revizuite
Reviewer – evaluează articolele și oferă feedback
Rolurile sunt gestionate la nivel de date și logică de aplicație



**Funcționalități implementate**
Organizator
  Creează și editează conferințe
  Vizualizează toate articolele trimise la o conferință
  Monitorizează statusul articolelor și deciziile reviewerilor
Autor
  Vizualizează conferințele disponibile
  Trimite articole către o conferință
  Primește feedback de la revieweri
  Reîncarcă o versiune nouă a articolului
Reviewer
  Primește automat articole spre evaluare  
  Poate aproba sau respinge un articol
  Poate oferi feedback autorului






.
  
