import express from 'express';
import process from 'node:process';
import {toDo,getTodoListing,complateTodo} from '../controller/todo.controller.js';

const router = express.Router();


const routes = ()=>{
  router.get('/',(req,res)=>{
    res.json(`Welcome to to do app ${process.pid}`);
  });

  router.post('/to-do',toDo);
  router.get('/get-to-do-listing',getTodoListing);
  router.put('/complate-to-do',complateTodo);
  return router;
}

export default routes;