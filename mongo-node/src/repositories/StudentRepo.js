/* eslint-disable class-methods-use-this */
import { StudentModel } from '../models';

class StudentRepo {
  async createStudent(studentObj) {
    const student = new StudentModel(studentObj);
    await student.save();
  }

  async getAllStudents() {
    return StudentModel.find({});
  }
}

export default StudentRepo;
