// Importando o Express na Index
import app from "./index.js";
//Importando o mongoose
import mongoose from "mongoose";

const db_user = process.env.db_user;
const db_password = encodeURIComponent(process.env.db_password);

const port = process.env.PORT || 3000;

// Conectando com o banco de dados
mongoose
  .connect(
    `mongodb+srv://${db_user}:${db_password}@correiosapi.xebhgkh.mongodb.net/?retryWrites=true&w=majority`
  )
  // Se der tudo ok com a conexão, o then aparece com a seguinte mensagem:
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Connected with success! \nListening on: http://localhost:${port}`
      );
    });
  })

  // Se der erro, o catch aparece com a seguinte mensagem:
  .catch((err) => console.log(`${err}: Erro de conexão com o banco de dados!`));
