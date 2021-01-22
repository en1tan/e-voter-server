const router = require('express').Router();

router.use('/awards', require('./award.route'));
router.use('/candidates', require('./candidate.route'));

module.exports = router;
