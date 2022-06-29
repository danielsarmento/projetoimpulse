require('dotenv').config();
const express = require ('express');

const server = express();
const PORT = process.env.PORT;

server.use(express.json());

server.use(express.urlencoded({ extended: true })); // Conseguir receber um POST

server.get ('/', (req, res) => {

    const idade = 28;
    res.send({ nome: "Daniel", sobrenome: "Sarmento"});
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})