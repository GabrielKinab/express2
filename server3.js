const express = require('express')
const app=require('')

app.listen(3000()=>{
    console.log('servidor em execução')
})

//rotas com parametros

app.get('/',(req,res)=>{
    res.send('Opaa, Qual é!')
})






//rota com 1 parametro

app.get('/Opaa/:nome',(req,res)=>{
    console.log(req,params,nome)
})

//rota com 2 parametrote.email}){
    res.send('O resultado dos numeros de'+req,params,nome+ ' é '+req,params.b+ ' é: '+(parseInt))+(parseInt(req.params.b));
})
