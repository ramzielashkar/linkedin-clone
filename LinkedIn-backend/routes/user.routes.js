const {Router} = require('express');
const { applyToJob } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/apply/', authMiddleware, applyToJob);




module.exports = router;