const express = require('express');
const app = express();
const port = 10000;

const bookRouters = require('./routes/bookRoutes');
const logger = require('./middlewares/logger');

app.use(express.json());

app.use("/", logger);

app.use("/books", bookRouters);

app.listen(port, () => {
    console.log(`Sono un server attivo sulla porta ${port}`)
});