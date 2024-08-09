const { request } = require('express');

const express = require('express')
const app = express();

app.listen(3000,()=>{
    console.log('Se tá ligado no Arr-vidorr!')
})
//criar arquivo functions

//impotar funções
const funcoes = require('./functions')
app.get('/',(req,res)=>{
    res.send('Teste com arquivos externos');
})

//rota para afunção
app.get('/add/:a/:b',(req,res)=>{
    const a = parent(req.params.a);
    const b = parent(req.params.b);
    const resultado = funcoes.add (a,b);

    
    res.send(`A soma de' ${a} e ${b} é ${resultado}`);
})

//criar a rota sub (con hífen)

app.get('/resultado/:a-:b',(req,res)=>{
    const a =req.params.b;
    const b =req.params.b;
    const resultado =b-a;
    res.send(`O resultado, usando hífem entre' ${a} e ${b} é ${resultado}`);
})
