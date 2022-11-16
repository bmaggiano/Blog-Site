const router = require('express').Router();

const blogRoutes = require('./blog.js');

router.use('/blog', blogRoutes);

module.exports = router;