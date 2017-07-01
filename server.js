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

/*

Expects JSON data in the following format:

    {
      "initialSavings": positive int,
      "monthlySavings": positive int,
      "interestRate": positive int
    }

Returns:

    {
      "error": boolean,
      "result": array
    }

*/
app.post('/api/calculate-earnings', (req, res) => {
  const result = calculator(req.body)
  res.json({
    error: false,
    result
  });
});
