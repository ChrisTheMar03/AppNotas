require('dotenv').config()
const app = require('./app')
const connectDB = require('./db/mongo')
const {appConfig,dbConfig,userConfig} = require('./config')

async function initApp(){
    try {
        await connectDB(userConfig.password,dbConfig.name)
        app.listen(appConfig.port,()=>{
            console.log(`Listening in port ${appConfig.port}`);
        })    
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
    
}

initApp()

