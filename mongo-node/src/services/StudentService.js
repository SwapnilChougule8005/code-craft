import {StudentRepo} from '../repositories';

class StudentService{

    constructor(){
        this.studentRepo = new StudentRepo();
    }
    
    async createStudent(student){
        // TODO: add validation checks
        // if validation checks pass go head else return from here
        await this.studentRepo.createStudent(student);
    }
}

export default StudentService;