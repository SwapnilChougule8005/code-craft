// Installing mongoose -> completed
// Establish connection with mongo DB server
// Create Schema/Models along with mongoose configuration
// Create repository design pattern
// Creates methods for DB transactions
// Create service layer to consume repository methods/run some business logic
// Setup node server
// Finally create an api to consume data from database or create data into database

// mongoose client lib


// singleton design pattern implementation 
// connect all layers 
// perform db operation 
// implement config for project
// configure eslint and prettier
// how to host mongo db on cloud


import mongoose from 'mongoose'
import express from 'express';
import { RootController } from './src/controller';
import { envConfig } from './src/config';

const app = express();

app.use(express.json())
app.use(RootController)


const PORT = envConfig.getPort()

// start server
app.listen(PORT, ()=>{
  console.log(`server is running on http://localhost:${PORT}`)
  
  mongoose.connect(envConfig.getMongoDBUrl())
  .then(() =>
    console.log('Connected!'))
  .catch((err)=>{console.log(error)})
})
















