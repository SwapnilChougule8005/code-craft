import {StudentModel} from '../models';

class StudentRepo {
    async createStudent(studentObj){
        const student = new StudentModel(studentObj)
        const result = await student.save();
    }

    async getAllStudents(){
        return StudentModel.find({});
    }
}

export default StudentRepo;