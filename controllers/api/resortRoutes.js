const router = require('express').Router();
const {resort} = require('../../models');

// All Routes start with '/api/resorts'
router.get('/', async (req, res) => {
    try{
        const resortData = await resort.findAll()
        const resorts = resortData.map((index) => index.get({ plain: true }));
        res.status(200).json(resorts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;