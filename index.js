require('dotenv').config();
const express = require ('express');

const server = express();
const PORT = process.env.PORT;

server.use(express.json());

server.use(express.urlencoded({ extended: true })); // Conseguir receber um POST

server.get ('/', (req, res) => {
    res.send('Está funcionando')
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})