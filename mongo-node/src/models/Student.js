import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  mobileNo: String,
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
