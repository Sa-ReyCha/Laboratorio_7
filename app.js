const express = require('express');
const path = require('path');
const morgan = require('morgan'); 
const mongoose = require('mongoose');//importa variable mongoose

const app = express();

// connection to db
mongoose.connect('mongodb://127.0.0.1/crud-mongo-blog',{ //esto es el servidor local / es el nombre de la base de datos
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('db connected')) //promesa, cuando eso se ejecute haga eso 'db connected'
    .catch(err => console.log(err)); //para los errores es lo mismo a .catch(function(err){console.log(err)})
//


// importing routes
const indexRoutes = require('./routes/routeindex'); // lo que hace es ligarlo a index routes
//
let blog = require("./model/task"); //esta es la ruta que trae al modelo ya creado
const { Date } = require('mongoose');


// Voy a trabajar con blog

// esto era una prueba hacia la bd
/*
let Blog = new blog({
    title: "PRUEBA_4", //esto tiene que ver con lo que defines de las propiedades del emlemento
    author: "PRUEBA_4",
    post_date: "02/04/2023", // no se como poner el valor de fecha :V
    post_data: "PRUEBA_4"
    })
    
    Blog.save()

*/



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //esto se agrega si la info viene de un formulario


// routes
app.use('/', indexRoutes);




app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})


