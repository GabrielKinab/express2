// rotas com pontos hifens
const express = require('express')
const app = express();

app.listen(3000,()={
    console.log('Se tá ligado no Arr!')
})
//rota base
app.get('/',(req,res)=>{
    res.send('Teste com parâmetros');
})

//rota com hífem
app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA =req.params.pontoA;
    const pontoB =req.params.pontoB;
    const distancia =pontoB -.pontoA;
    res.send('A distância, usandonhífem entre' ${pontoA} e ${pontoB} é ${distancia});
})
