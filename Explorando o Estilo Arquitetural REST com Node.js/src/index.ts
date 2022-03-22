import express from "express";
import authorizationRoute from "./routes/authorization.route";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";

const app = express(); //instancia de Express

//Configurações da aplicação
app.use(express.json()); //Para aceitar Json nas requisições
app.use(express.urlencoded({ extended: true })); //parcear alguns atributos do header, url...

//Configurações de Rotas  --- Para usar as rotas
app.use(usersRoute); // tora de usuários
app.use(statusRoute); // rota de status
app.use(authorizationRoute); //rota de autenticação

//Configurações de servidor
app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000!"); // sobe o servidor
});
