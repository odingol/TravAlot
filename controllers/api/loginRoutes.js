const router = require('express').Router();
const { Login } = require('../../models');

// All Routes start with '/api/resorts'
router.get('/', async (req, res) => {
    try{
        const loginData = await Login.findAll()
        const logins = loginData.map((index) => index.get({ plain: true }));
        res.status(200).json(logins);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
        const userData = await Login.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;