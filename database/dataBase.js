const mongoose = require("mongoose");

const connectToDB = () => {
  mongoose.connect(
      "mongodb+srv://root:admin@impulse-teste.hwjyz.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
      console.log("MongoDB Atlas CONECTADO!");
    })
    .catch((e) => console.log(e));
};

module.exports = connectToDB;