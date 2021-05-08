const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors())

const clientes =[{
    id:"1",
    nome:"José",
    fone: "11223344",
    email: 'jose@email.com'
},
{
    id:"1",
    nome:"Ana",
    fone: "11223355",
    email: 'ana@email.com'
}
]

app.post('/api/clientes', (req, res, next) => {
    const cliente = req.body
    conssole.log(cliente);
    res.status(201).json({
        mensagem: "Cliente inserido"
    })
});

//cors
// app.use((req, res, next) => {
//     res.setHeader("Accces-control-Allow_Origin","*")
//     res.setHeader("Access-Control-Allow_Headers","Origin, x-Requested-With, Content-Type, Accept")
//     res.setHeader("Access-Control-Allow_Methods", "GET,POST,PATCH,DELETE,OPTIONS")
//     next();
// })

// app.use('/api/clientes', (req, res, next)=>{
//     conole.log('chegou uma requisicao')
//     next();
// })

app.get('/api/clientes', (req, res, next)=>{
    res.status(200).json({
        mensagem: "tudo ok",
        clientes: clientes
    });
})

module.exports = app;