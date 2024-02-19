import express from 'express';
import StudentController from './StudentController';
import HealthCheckController from './HealthCheck';

const router = express.Router();

router.use('/api/v1/student',StudentController);
router.use('/api/v1', HealthCheckController)
// add more routes

export default router;