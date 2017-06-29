const express = require('express');

const app = express();

// var bodyParser = require('body-parser');
// var app = express();
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());
// var router = express.Router();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

app.get('/', (req, res) => {
  res.json({
    error: false,
    message: 'Hello there!'
  });
});
