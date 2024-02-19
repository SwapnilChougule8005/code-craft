import {StudentRepo} from '../repositories';

class StudentService{

    constructor(){
        this.studentRepo = new StudentRepo();
        process.env.PORT // 
    }
    
    
    async createStudent(student){
        // TODO: add validation checks
        // if validation checks pass go head else return from here
        await this.studentRepo.createStudent(student);
    }
    async getAllStudents(){
        await this.studentRepo.getAllStudents();
    }
}

export default StudentService;