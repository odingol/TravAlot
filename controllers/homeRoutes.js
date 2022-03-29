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

module.exports = router;