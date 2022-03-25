const router = require('express').Router();

// End points
const userRoutes = require('./usersRoutes');

router.use('/users', userRoutes);

module.exports = router;