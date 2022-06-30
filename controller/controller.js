const AlunosCadastrados = require("../model/dadosModel");

exports.getAluno = async (req, res) => {
    const NDG = req.params.matricula;
    if (NDG === '001' || NDG === '002' || NDG === '003' || NDG === '004' || NDG === '005'){
        try{
            const Aluno = await AlunosCadastrados.findOne({matricula: NDG});
            res.send(Aluno)
            }
            catch (err) {
            res.status(500).send({ error: err.message });
          }
    } else {
        return res.send({erro:true})
    }
    };
