'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const urlChars = '123456789bcdfghjkmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

app.locals.URLs = {
  xZB32: 'http://www.turing.io',
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Jet Fuel';

app.get('/', (request, response) => {
  response.send('Let\'s shorten that URL');
});

app.get('/api/:shortURL', (request, response) => {
  const { shortURL } = request.params;
  let longURL = app.locals.URLs[shortURL];

  response.json({ shortURL, longURL });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});