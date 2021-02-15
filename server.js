const express = require('express');
const uuid = require('uuid');
const app = express();

const port = 3001;


const todos = [
    {
        tarea: 'sacar la basura ',
        hora:'10:00 am',
        prioridad:1
    }

];

app.use(express.json());

app.get(
    '/todos',
    function(req,res){
        res.json(todos);
    }    
);

app.post(
    '/todos',
    function(req,res){
        const newTodo = {...req.body};
        newTodo.id = uuid.v4();

        todos.push(newTodo);
        res.json(newTodo);
    }    
);

app.listen(
    port,
    function(){
        console.log("El microservicio de To-dos esta corriendo en el puerto", port);
    }
);