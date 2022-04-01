const router = require('express').Router();
const {themePark} = require('../../models');

router.get('/', async (req, res) => {
    try{
        const themeParkData = await themePark.findAll()
        const themeparks = themeParkData.map((index) => index.get({ plain: true }));
        res.status(200).json(themeparks);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const themeParkData = await themePark.create({...req.body, user_id: req.session.user_id});
        const themeparks = themeParkData.get({ plain: true });
        res.status(200).json(themeparks);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;