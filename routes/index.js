const router = require('express').Router();
const waterbearRoutes = require('./waterbearRoutes');

router.use('/', waterbearRoutes);

module.exports = router;