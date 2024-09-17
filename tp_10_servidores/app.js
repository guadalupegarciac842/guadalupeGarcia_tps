const express= require ('express');
const app = express();
const path = require ('path');
const PORT = 3000;

app.use(express.static('public'));

app.listen(PORT,() => console.log(`Server running in http://localhost:${PORT}`));

app.get('/', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','index.html'))
});

app.get('/babbage', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','babbage.html'))
});

app.get('/berners-lee', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','berners-lee.html'))
});

app.get('/clarke', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','clarke.html'))
});

app.get('/hamilton', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','hamilton.html'))
});

app.get('/lovelace', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','lovelace.html'))
});

app.get('/turing', (req,res) => {
    return res.sendFile(path.join(__dirname,'heroes','views','turing.html'))
});
