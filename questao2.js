const express = require("express");
const filmes = require("./questao2_data.json");
const server = express();
server.use(express.json());

// Resolva a questão 2 a partir desta linha
// (a) GET /filmes - retorna todos os filmes ou filtra por título
server.get('/filmes', (req, res) => {
    const { titulo } = req.query;
  
    const resultado = !titulo
      ? filmes
      : filmes.filter(filme =>
          filme.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
  
    res.status(200).json(resultado);
  });
// (b) GET /filmes/:id - retorna o filme pelo id
server.get('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    const filme = filmes.find(f => f.id === id);
  
    if (!filme) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
  
    res.status(200).json(filme);
  });
// (c) POST /filmes - adiciona um novo filme
server.post('/filmes', (req, res) => {
    const novoFilme = req.body; 
  
    filmes.push(novoFilme);
  
    res.status(201).json(novoFilme);
  });
  
// (d) DELETE /filmes/:id - remove um filme pelo id
server.delete('/filmes/:id', (req, res) => {
    const id = parseInt(req.params.id);
  
    const index = filmes.findIndex(f => f.id === id);
  
    if (index === -1) {
      return res.status(404).json({ erro: "Filme não encontrado" });
    }
  
    const removido = filmes.splice(index, 1);
  
    res.status(200).json(removido[0]);
  });
        

// Caso queira, poderá alterar a porta
server.listen(5001);
