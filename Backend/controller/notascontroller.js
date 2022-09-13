const notaSchema = require('../models/nota')

async function getNotas(req,res){
    const notas  = await notaSchema.find()
    res.status(200).send({notas})
}

async function postNotas(req,res){
    try {
        //*Capturando cuerpo enviado [destructuracion del objeto]
        const {titulo,nota,color,favorito} = req.body

        //*Pasando los argumentos al esquema
        const notaNueva = notaSchema({titulo,nota,color,favorito})
        
        //*Guardando , ademas a la espera del resultado
        const notaGuarda = await notaNueva.save()
        
        //*Enviando respuesta
        res.status(201).send({notaGuarda})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
    
}

async function findNota(req,res){
    try {
        const {id} = req.params
        const nota = await notaSchema.findById(id)
        res.status(200).send(nota)
    } catch (error) {
        console.log(error);
        res.status(500).send({message:error.message})
    }
}

module.exports = {
    getNotas,
    postNotas,
    findNota
}
