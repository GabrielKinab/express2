const express = require('express');
const app = express();

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor em execução na porta 3000');
});

// Rota padrão
app.get('/', (req, res) => {
    res.send('Opaa, Qual é!');
});

// Rota com 1 parâmetro
app.get('/Opaa/:nome', (req, res) => {
    // Acessa o parâmetro 'nome' e envia uma resposta
    const nome = req.params.nome;
    res.send(`Olá, ${nome}!`);
});

// Rota com 2 parâmetros (e.g., /soma/5/10)
app.get('/soma/:a/:b', (req, res) => {
    // Acessa os parâmetros 'a' e 'b'
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).send('Parâmetros inválidos');
    } else {
        // Calcula a soma e envia a resposta
        const resultado = a + b;
        res.send(`A soma de ${a} e ${b} é: ${resultado}`);
    }
});
