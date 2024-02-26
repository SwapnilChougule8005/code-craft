import {StudentRepo} from '../repositories';


class StudentService{

    constructor(){
        this.studentRepo = new StudentRepo();
        if(!StudentService.instance){
            StudentService.instance = this;
        }

        return StudentService.instance;
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