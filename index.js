const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'assets')));

// Configurando a renderização de páginas HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/dados', (req, res) => {
  const { nome, cep, logradouro, bairro, numero, complemento, referencia, cidade, estado, telefone, dia, mes, ano } = req.body;
  console.log("\nNome:", nome, "\nCep:", cep, "\nLogradouro:", logradouro, "\nBairro:", bairro, "\nNúmero:", numero, "\nComplemento:", complemento, "\nReferência:", referencia, "\nCidade:", cidade, "\nEstado:", estado, "\nTelefone:", telefone, "\nDia:", dia, "\nMês:", mes, "\nAno:", ano);
  // Você também pode renderizar uma página com esses dados, assim como fez no exemplo original.
  res.sendFile(path.join(__dirname, 'views', 'dados.html'));
});



const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})
