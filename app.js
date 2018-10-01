const express = require('express');
const app = express();

// Setup pug
app.set('view engine', 'pug');

// Routers (see routes/index.js)
const mainRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/static', express.static('public'));


// Error handling
app.use((req, res, next) => {
  const err = new Error("Sorry, this pages doesn't exist.");
  err.status = 404;
  console.log(`${err.status} error - ${err.message}`);
  next(err);
});

// Error handling
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

//run app at localhost:3000
app.listen(3000);
