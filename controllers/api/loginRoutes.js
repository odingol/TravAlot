const router = require('express').Router();
// const { Login } = require('../../models');
const { User } = require('../../models');

// All Routes start with '/api/resorts'
router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll()
        const logins = userData.map((index) => index.get({ plain: true }));
        res.status(200).json(logins);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });


        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        console.log(validPassword);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password' });
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

router.post('/signup', async (req, res) => {
try {
    const formData = await User.create(req.body);

    req.session.save(() => {
            req.session.user_id = formData.id;
            req.session.logged_in = true;

            res.redirect('/user');
            // res.status(200).json(formData);
    });
}

catch (err) {
console.log(err)
res.status(400).json(err);
};

});

module.exports = router;