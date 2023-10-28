const express = require('express')
const app = express()

app.use(express.static('public'));
app.use(express.static('files'));
app.use('/static', express.static(__dirname + '/public'));

app.listen(2050, function() {
    console.log('O Server Está Rodando Na Porta 2050')
})

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/login.html")
})

app.get('/Principal',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/Torneios',(req,res) => {
    res.sendFile(__dirname + "/server.html")
})