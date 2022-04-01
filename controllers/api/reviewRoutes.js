const router = require('expess').Router();
const { route } = require('.');
const { Review } = require('../../models');

route.post('/', async (req, res) => {
    try {
        const reviewData = await Review.create(req.body); 
    }catch (err) {
        res.status(500).json(err);
    }
});