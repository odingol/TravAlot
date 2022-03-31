const router = require('express').Router();
const {resort} = require('../models');
// const {User} = require('../models');
// const {themeParks} = require('../models');
// const {waterParks} = require('../models');
// const {rollerCoasters} = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/resorts', async (req, res) => {
    try{
        const resortData = await resort.findAll()
        const resorts = resortData.map((index) => index.get({ plain: true }));
        res.render('resorts', {resorts});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/waterparks', async (req, res) => {
    try{
        const waterData = await waterPark.findAll()
        const waterparks = waterData.map((index) => index.get({ plain: true }));
        res.render('waterparks', {waterparks});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/themeparks', async (req, res) => {
    try{
        const themeParkData = await themePark.findAll()
        const themeparks = themeParkData.map((index) => index.get({ plain: true }));
        res.render('themeparks', {themeparks});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rollercoaster', async (req,res ) => {
    try{
            const coasterData = await rollerCoaster.findAll()
            const rollercoasters = coasterData.map((index) => index.get({ plain: true }));
            res.render('rollercoasters', {rollercoasters});
        } catch (err) {
            res.status(500).json(err);
        }
});

// Ask tutor about structuring
// router.get('/user', async (req, res) => {
//     try {
//         const userData = await user.findOne({ where: { email: req.body.email } });
//         const users = userData.map((index) => index.get({ plain: true }));
//         res.render('user', {user});
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;