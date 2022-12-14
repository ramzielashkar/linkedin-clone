const {Router} = require('express');
const { addJob, getJobs, getApplications } = require('../controllers/company.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.post('/', authMiddleware, companyMiddleware, addJob);
router.get('/', authMiddleware, companyMiddleware, getJobs);
router.get('/:job_id/', authMiddleware, companyMiddleware, getApplications);


module.exports = router;