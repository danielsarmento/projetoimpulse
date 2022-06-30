require('dotenv').config();
const express = require ('express');

const server = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes/routes');
const connectToDB = require('./database/dataBase');

server.use(express.urlencoded({ extended: true })); // Conseguir receber um POST
server.use(routes);
connectToDB();

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})