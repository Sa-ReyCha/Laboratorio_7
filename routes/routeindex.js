const { render } = require('ejs');
const express = require('express');
const router = express.Router(); //define lo que lo hace router
const Task = require('../model/task'); // esto se trae el task original de model task


router.get('/', async function(req,res){
  let tasks = await Task.find(); //consulta a DB para recuperar las tareas
  console.log(tasks);
  res.render('index', {tasks});
});


router.get('/newPost', async (req,res) =>{
  res.render('newPost');
});

//agregar nuevos blogs
router .post('/newPost', async function(req,res){ // el async lo que hace es esperarse

  console.log(req.body) //- - recibo title, author y postdata - - justo lo que quiero // name es imporante
  let task = new Task(req.body) // esto lo que hace es poder generar un nuevo Task 
  await task.save() // se espera a que termina el codigo

  
  res.redirect("/") //regresa a casa
})

// eliminar viejos blogs
router .get('/delete/:id', async function(req,res){
  let id = req.params.id
  await Task.remove({_id:id})
  res.redirect("/")
})



// editar viejos blogs

//lectura
router.get("/edit/:id", async function(req,res){

  let id = req.params.id    
  let task = await Task.findById(id)
  res.render("edit",{task})    
  })

//post
router.post('/edit/:id', async function(req,res){
  let id = req.params.id
  await Task.updateOne({_id:id}, req.body)
  res.redirect("/")
})

module.exports = router; // esto importa a app