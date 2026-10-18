// routes/AuthRoute.js
const { Signup, Login } = require('../controller/usercontroller');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);

module.exports = router;