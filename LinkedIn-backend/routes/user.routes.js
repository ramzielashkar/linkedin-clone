const {Router} = require('express');
const { applyToJob, followCompany } = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const userMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.post('/apply/', authMiddleware, userMiddleware, applyToJob);
router.get('/follow/:name', authMiddleware, userMiddleware, followCompany);



module.exports = router;