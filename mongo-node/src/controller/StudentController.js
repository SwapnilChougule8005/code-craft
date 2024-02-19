import express from 'express';
import StudentService from '../services/StudentService';

const router = express.Router();
const studentService = new StudentService();

router.get('/', async (req, res)=>{
    const studentList = await studentService.getAllStudents();
    res.status(200).send(studentList);
})

router.get('')
export default router