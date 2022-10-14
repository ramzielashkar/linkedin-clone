const {Router} = require('express');
const { applyToJob } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.post('/apply/', authMiddleware, userMiddleware, applyToJob);




module.exports = router;