const { Date } = require("mongoose")
let mongoose = require("mongoose") // esto crea  
let Schema = mongoose.Schema // esto crea una variable 


let TaskSchema = Schema({ //es un objeto

title: String, //esto tiene que ver con lo que defines de las propiedades del emlemento
author: String,
post_date : {
type: Date,
default: Date.now //por si no dan estatus pues se pone no
},
post_data: String
})

module.exports = mongoose.model('tasks',TaskSchema) //esto exporta tasks como objeto y 
// taskschema es el objeto en si