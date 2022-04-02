const router = require('express').Router();

// End points
const userRoutes = require('./usersRoutes');
const resortRoutes = require('./resortRoutes');
const waterParkRoutes = require('./waterParkRoutes');
const themeParkRoutes = require('./themeParkRoutes');
const rollerCoasterRoutes = require('./rollerCoasterRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/users', userRoutes);
router.use('/resorts', resortRoutes);
router.use('/waterparks', waterParkRoutes);
router.use('/themeparks', themeParkRoutes);
router.use('/coasters', rollerCoasterRoutes);
router.use('/login', loginRoutes);

module.exports = router;