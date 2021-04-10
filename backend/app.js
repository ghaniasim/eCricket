const express = require('express');
const mongoose = require('mongoose');
const Quiz = require('./dbQuiz.js');
const bodyParser = require('body-parser');
const app = express();
require('dotenv/config');

// middleware
app.use(bodyParser.json());

// connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () =>
  console.log('Connected to DB'),
);

// routes
app.get('/', (req, res) => {
  res.send('Hello from Quiz backend');
});

// find all quiz
app.get('/quizes', (req, res) => {
  Quiz.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// post a quiz
app.post('/quiz', (req, res) => {
  const quiz = req.body;

  Quiz.create(quiz, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listening to the server
app.listen(8080);
