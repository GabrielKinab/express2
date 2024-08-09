const express const express = require('express')
const app = express();

app.listen(3000()=>{
    console.log('eae beleza, tamos ligados no ar')
})

//dados do cliente 
const cliente =[
(_id: 1, _nome: "Aumir", _telefone: "41993527342", _email:"aumirante@gmail.com"),
(_id: 2, _nome: "Berlim", _telefone: "41992547258", _email:"gaumiberlim@gmail.com"),
(_id: 3, _nome: "Chimiero", _telefone: "41994370748", _email:"chimieroconshes@gmail.com"),
(_id: 4, _nome: "Doarde", _telefone: "41996895762", _email:"doarderoperio@gmail.com"),
(_id: 5, _nome: "Eflorde", _telefone: "41997445692", _email:"eflorde001@gmail.com")
]
//rotas
app.get('/', (_req, res,)=>{
    res.send("API de clientes");
}) 

//rota 2 - o total de clientes
app.get('/total clientes',(_req,res)=>{
    res.send("Total clientes: "+clientes.length);
})

//rota 3  - apresentar dados de um cliente especifico
app.get('/clientes/id',(req,_res)=>{
    const cliente = clientes.find(c =>c.id === parseInt(req.paramas.id))
    //rotas
    app.get('/', (_req, res,)=>{
        res.s'${cliente.nome}, 'telefone:' ${cliente.telefone} 'emai:' ${cliente.email})
    res.send('O clientnome: "Doarde", telefone: "41996895762", email:"doarderoperio@gmail.com"),
    (id: 5, nome: "Eflorde", telefone: "41997445692", email:"eflorde001@gmail.com")
    ]
    //rotas
    app.get('/', (_req, res,)=>{
        res.s'${cliente.nome}, 'telefone:' ${cliente.telefone} 'emai:' ${cliente.email})
        //rotas
        app.get('/', (_req, res,)=>{
            res.s'${cliente.nome}, 'telefone:' ${cliente.telefone} 'emai:' ${cliente.email})