/*
 Nessa aula aprendemos como inciar um projeto node
 npm init -y. Comando usado para iniciar um projeto novo na pasta atual
 Criando um arquivo package.json

 Criando um api rest, instalamos 
 // npm install express -save -- é usado para instalar o pacote do Express, um framework web para o desenvolvimento de aplicativos em Node.js.
 criamos um arquivo app.js
 criamos uma rota padrão
 definimos a escuta da porta no endereço localrost 

 instalamos as depedencias de desenvolvimentos nodemon 


 */


const express = require('express');
const app = express();
const port = 3000;

// Criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send(`
        <h1>Seja bem vindo</h1>
        <h3>Bora codar!!!</h3>
        <p>Nesse curso iremos aprender muito mais de node js</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node JS"/>
    `);
})


// Escutar a porta 3000

app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`);
})


// npm init -y. Comando usado para iniciar um projeto novo na pasta atual

// npm install express -save -- é usado para instalar o pacote do Express, um framework web para o desenvolvimento de aplicativos em Node.js.


// npm install nodemon -D -- Comando para instalar o nodemon

// npm run dev  -- Comando para rodar o servidor
