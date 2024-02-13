// Installing mongoose -> completed
// Establish connection with mongo DB server
// Create Schema/Models along with mongoose configuration
// Create repository design pattern
// Creates methods for DB transactions
// Create service layer to consume repository methods/run some business logic
// Setup node server
// Finally create an api to consume data from database or create data into database

// mongoose client lib
import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/school')
  .then(() => console.log('Connected!'));
















