const AlunosCadastrados = require("../model/dadosModel");

exports.getAluno = async (req, res) => {
    try{
      const Aluno = await AlunosCadastrados.findOne({matricula: req.params.matricula});
      res.send(Aluno)
      }
      catch (err) {
      res.status(500).send({ error: err.message });
    }
    };
