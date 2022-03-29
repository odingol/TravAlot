const router = require('express').Router();
const {resort} = require('../models');

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

module.exports = router;