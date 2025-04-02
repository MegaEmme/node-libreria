const books = require('../data/books');

function index(req,res){
    let filteredBooks = books;
    if(req.query.author){
        filteredBooks = books.filter(book => book.author.includes(req.query.author));
    };
    res.json(filteredBooks);
};

function show(req,res){
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id ===id);
    if(!book){
        console.log(`Libro con ID ${id} non trovato`);
        res.status(404);
        return res.json({
            status: 404,
            console: "Not Found",
            message: "libro non trovato"
        });
    }
    res.json(book);
};

function store(req,res){
    const newId = books[books.length-1].id +1;
    if (!req.body.title || !req.body.author) {
        return res.status(400).json({ error: 'Titolo e autore sono obbligatori' });
    };
    const newBook = {
        id: newId,
        title: req.body.title,
        author: req.body.author,
        year: parseInt(req.body.year),
        available: req.body.available === 'true' ? true : false
    };
    console.log(newBook);
    books.push(newBook);
    console.log(books);
    res.status(201).json(newBook);
};

function update(req, res) {
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
      console.log(` Nessun libro trovato con ID ${id}. Aggiornamento non eseguito.`);
      return res.status(404).json({ error: `Libro con ID ${id} non trovato` });
    }
    const updatedBook = {
      id: id,
      title: req.body.title,
      author: req.body.author,
      year: parseInt(req.body.year),
      available: req.body.available  === 'true' ? true : false
    };
    books[index] = updatedBook;
    console.log(` Libro con ID ${id} aggiornato con successo.`);
    console.log(' Nuovo contenuto del libro:', updatedBook);
    console.log(' Lista aggiornata:', books);
    return res.status(200).json({
      message: 'Libro aggiornato con successo (completo)',
      nuovoLibro: updatedBook
    });
  }

function destroy(req,res){
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if(!book){
        res.status(404);
        return res.json({
            status: 404,
            error: 'Not Found',
            message: 'Libro non trovato'
        });
    };
    books.splice(books.indexOf(book), 1);
    console.log(` Post con ID ${id} eliminato con successo.`);
    console.log(' Lista aggiornata:', books);
    res.sendStatus(204);
};

module.exports = {index, show, store, update, destroy};