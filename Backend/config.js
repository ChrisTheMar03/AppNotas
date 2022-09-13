const config = {
    appConfig :{
        port : process.env.APP_PORT
    },
    userConfig : {
        password : process.env.USER_PASSWORD
    },
    dbConfig :{
        name : process.env.DB_NAME
    }
}

module.exports = config
