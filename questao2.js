const express = require("express");
const filmes = require("./questao2_data.json");
const server = express();
server.use(express.json());

// Resolva a questão 2 a partir desta linha


// Caso queira, poderá alterar a porta
server.listen(5001);
