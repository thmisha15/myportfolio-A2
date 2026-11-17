// LECTURE: MEAN Stack Development, slide 88 (HTTP GET route handlers),
// slides 93, 100, 105 (res.render(view, locals) sends rendered EJS HTML).

var express = require('express');
var router = express.Router();

// HOME: '/' renders views/index.ejs and identifies the active nav item.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', active: 'home' });
});

// ABOUT: '/about' renders views/about.ejs.
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About', active: 'about' });
});

// PROJECTS: '/projects' renders views/projects.ejs.
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

// CONTACT: '/contact' renders views/contact.ejs.
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact', active: 'contact' });
});

// LECTURE: MEAN Stack Development, slides 44-47 (export CommonJS module).
module.exports = router;