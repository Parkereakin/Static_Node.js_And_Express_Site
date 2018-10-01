const express = require('express');
const router = express.Router();
const projects = require('../data.json').projects;

// project GET route
router.get('/project_:id', (req, res) => {
  res.render('project', {
      title: projects[req.params.id].project_name,
      description: projects[req.params.id].description,
      technologies: projects[req.params.id].technologies,
      preview: projects[req.params.id].live_link,
      repository: projects[req.params.id].github_link,
      images: projects[req.params.id].image_urls
  });
});

module.exports = router;
