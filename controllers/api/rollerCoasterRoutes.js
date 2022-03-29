const router = require('express').Router();
const {rollerCoaster} = require('../../models');

router.get('/', async (req,res ) => {
    try{
        const coasterData = await rollerCoaster.findAll()
        const rollercoasters = coasterData.map((index) => index.get({ plain: true }));
        res.status(200).json(rollercoasters);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;