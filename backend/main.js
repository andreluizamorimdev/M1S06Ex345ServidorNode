const express = require('express');
const app = express();
app.use(express.json());

// parte do exercicio 4
app.get('/envia/:name', (request, response) => {
    let name = request.params.name;
    response.send(`Rota de API criada pelo: ${name}`);
    console.log(`Rota de API criada pelo: ${name}`);
});

// parte do exercicio 5
app.post('/enviaObjeto', (request, response) => {
    const object = request.body;
    response.json(object);
    console.log(`Enviado com sucesso ${JSON.stringify(object)}`);
});


// parte do exercicio 3
app.listen(3333, () => {
    console.log("Servidor iniciado com sucesso na porta 3333");
});