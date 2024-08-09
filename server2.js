const express = require('express')
const morgan=require('morgan')

const server2 =express()


server2.listen(3000)
server2.use(mmorgan('Metodo = :method  | Status = :status | Url = :url '))

server2.get('/',(req,res)=>{
    res.send('Teste de conexão do server2')

})


