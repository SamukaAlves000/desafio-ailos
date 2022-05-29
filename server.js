const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.static(__dirname + '/dist/desafio'));
console.log(__dirname + 'dist/desafio');
app.get('/*',(req,res)=>{
  res.sendFile(__dirname+'/dist/desafio/index.html');
  console.log(__dirname+'/dist/desafio/index.html')
});

app.listen(PORT,()=>{
      console.log("Servidor iniciado na porta:" + PORT);
});



