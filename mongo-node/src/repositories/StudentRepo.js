import {StudentModel} from '../models';

class StudentRepo {
    async createStudent(student){
        const result = await StudentModel.create(student);
    }
}

export default StudentRepo;