const {Router} = require('express');
const { addJob, getJobs } = require('../controllers/company.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.post('/', authMiddleware, addJob);
router.get('/', authMiddleware, getJobs);


module.exports = router;