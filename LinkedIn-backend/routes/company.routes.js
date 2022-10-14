const {Router} = require('express');
const { addJob } = require('../controllers/company.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/', authMiddleware, addJob);


module.exports = router;