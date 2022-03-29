const router = require('express').Router();
const {waterPark} = require('../../models');

router.get('/', async (req, res) => {
    try{
        const waterData = await waterPark.findAll()
        const waterparks = waterData.map((index) => index.get({ plain: true }));
        res.status(200).json(waterparks);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;