const express = require('express');

const app = express();

app.listen(3636);

app.get('/', (request,response)=>{
    return response.send("Hello World");
});

app.get('/sobre', (request,response)=>{
    return response.send("sobre");
});  
