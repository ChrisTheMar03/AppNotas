const mongoose = require('mongoose')

const notaSchema = mongoose.Schema({
    titulo:String,
    nota:String,
    color:String,
    favorito:Boolean
},
{
    timestamps:true //retorna el tiempo
})


module.exports = mongoose.model("nota",notaSchema)