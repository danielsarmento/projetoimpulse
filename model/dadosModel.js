const mongoose = require('mongoose');

// Limitando o estilo do dado.
const EstruturaDados = new mongoose.Schema({
    matricula: {type: String, required: true},
    nome: {type: String, required: true},
    serie: {type: String, required: true},
    turma: {type: String, required: true},
    numeroFaltas: {type: String, required: true},
    disciplinas: {Portugues : {type: String, required: true},
                  Matematica: {type: String, required: true},
}});

//Criando a coleção dentro do BD
const AlunosCadastrados = mongoose.model('AlunosCadastrados', EstruturaDados);

// Exportando a Coleção para ser acessada e criado o dado
module.exports = AlunosCadastrados;