import {StudentModel} from '../models';

class StudentRepo {
    async createStudent(studentObj){
        const student = new StudentModel(studentObj)
        const result = await student.save();
    }
}

export default StudentRepo;