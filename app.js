const express = require('express');

const app = express();

const me = {
  "name": "Parker Eakin",
  "age": 28,
  "location": {
    "city": "Sandy",
    "state": "Utah",
    "country": "US"
  }
};
// setup pug
app.set('view engine', 'pug');

// index GET route
app.get('/', (req, res) => {
  res.render('index');
});

// about GET route
app.get('/about', (req, res) => {
  res.render('about');
});

// project GET route
app.get('/project', (req, res) => {
  res.render('project');
});

//run app at localhost:3000
app.listen(3000);
