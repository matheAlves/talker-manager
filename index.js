const express = require('express');
const bodyParser = require('body-parser');
const talkerRoute = require('./talkerRoute');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/talker', talkerRoute);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).json();
});

app.listen(PORT, () => {
  console.log('Online');
});
