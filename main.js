const express = require('express')
const app = express()
const router = require('./src/routes/router')

app.use(express.json())

app.use(function (req, res, next) {
    res.contentType('application/json');
    next();
  });

app.use(router)

app.listen(3000, () => {
    console.log('Api rodando na porta 3000')
})