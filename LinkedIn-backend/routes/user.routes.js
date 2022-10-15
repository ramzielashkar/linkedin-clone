const {Router} = require('express');
const { applyToJob, followCompany, search, getJob } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.post('/apply/', authMiddleware, userMiddleware, applyToJob);
router.get('/follow/:name', authMiddleware, userMiddleware, followCompany);
router.get('/search/:job', authMiddleware, userMiddleware, search);
router.get('/job/:name', authMiddleware, userMiddleware, getJob);

module.exports = router;