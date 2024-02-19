import dotenv from 'dotenv';

dotenv.config({path:'../../.env'});

class EnvConfig {

    getValue(envProperty, isMandatory){
        const value = process.env[envProperty];
        if(isMandatory && !value){
            throw new Error(`env.${envProperty} not found`)
        }
        return value;
    }

    getPort(){
        return this.getValue('PORT', true);
    }

    getMongoDBUrl(){
        // write your pre-accessing logic
        return this.getValue('MONGO_DB_URL', true);
    }
}
const envConfig = new EnvConfig();
export default envConfig