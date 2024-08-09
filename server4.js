const express = require('express');
const app = express();

const port = 3000;

// Dados do cliente
const clientes = [
    { id: 1, _nome: "Aumir", _telefone: "41993527342", _email: "aumirante@gmail.com" },
    { id: 2, _nome: "Berlim", _telefone: "41992547258", _email: "gaumiberlim@gmail.com" },
    { id: 3, _nome: "Chimiero", _telefone: "41994370748", _email: "chimieroconshes@gmail.com" },
    { id: 4, _nome: "Doarde", _telefone: "41996895762", _email: "doarderoperio@gmail.com" },
    { id: 5, _nome: "Eflorde", _telefone: "41997445692", _email: "eflorde001@gmail.com" }
];

// Inicia o servidor
app.listen(port, () => {
    console.log(`eae beleza, tamos ligados no ar na porta ${port}`);
});

// Rota padrão
app.get('/', (_req, res) => {
    res.send("API de clientes");
});

// Rota para o total de clientes
app.get('/total-clientes', (_req, res) => {
    res.send("Total clientes: " + clientes.length);
});

// Rota para apresentar dados de um cliente específico
app.get('/clientes/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (cliente) {
        res.send(`Nome: ${cliente._nome}, Telefone: ${cliente._telefone}, Email: ${cliente._email}`);
    } else {
        res.status(404).send('Cliente não encontrado');
    }
});
