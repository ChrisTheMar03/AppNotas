const mongoose = require('mongoose')

mongoose.connection.on('open',()=>{
    console.log('Conexion a mongoDB establecida');
})

async function connectDB(password,dbname){
    await mongoose.connect(`mongodb+srv://root:${password}@cluster0.luff1pi.mongodb.net/${dbname}?retryWrites=true&w=majority`)
}

module.exports = connectDB
