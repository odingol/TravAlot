const router = require('express').Router();
const {resort} = require('../models');
const {User} = require('../models');
const {themePark} = require('../models');
const {waterPark} = require('../models');
const {rollerCoaster} = require('../models');
const {Login} = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('home');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/resort', async (req, res) => {
    try{
        const resortData = await resort.findAll()
        const resorts = resortData.map((index) => index.get({ plain: true }));
        res.render('resort', {resorts});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/waterpark', async (req, res) => {
    try{
        const waterData = await waterPark.findAll()
        const waterparks = waterData.map((index) => index.get({ plain: true }));
        res.render('waterpark', {waterparks});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/themepark', async (req, res) => {
    try{
        const themeParkData = await themePark.findAll()
        const themeparks = themeParkData.map((index) => index.get({ plain: true }));
        res.render('themepark', {themeparks});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/rollercoaster', async (req,res ) => {
    try{
            const coasterData = await rollerCoaster.findAll()
            const rollercoasters = coasterData.map((index) => index.get({ plain: true }));
            res.render('rollercoaster', {rollercoasters});
        } catch (err) {
            res.status(500).json(err);
        }
});

router.get('/login', async (req,res ) => {
    try{
            const loginData = await Login.findAll()
            const logins = loginData.map((index) => index.get({ plain: true }));
            res.render('login', {logins});
        } catch (err) {
            res.status(500).json(err);
        }
});


router.get('/user', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { id: req.session.user_id } });
        const users = userData.map((index) => index.get({ plain: true }));
        res.render('user', {users});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;