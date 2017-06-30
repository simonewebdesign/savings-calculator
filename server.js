const express = require('express');
const bodyParser = require('body-parser');
const calculator = require('./lib/calculator');

const app = express()
        .set('port', process.env.PORT || 3001)
        .use(bodyParser.json())

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

app.post('/', (req, res) => {
  const {initialSavings,
         monthlySavings,
         interestRate} = req.body

  const result = calculator(initialSavings, monthlySavings, interestRate)

  res.json({
    error: false,
    result: result
  });
});
