const express = require('express');
const router = express.Router();

// index GET route
router.get('/', (req, res) => {
  const projects = require('../data.json').projects;
  res.render('index', { projects });
});

// about GET route
router.get('/about', (req, res) => {
  res.render('about');
});

// redirect /project to /projects
router.get('/project', (req, res) => {
  res.redirect('/projects');
});

// redirect /project to /projects
router.get('/projects', (req, res) => {
  res.redirect('/projects/project_0');
});

module.exports = router;
