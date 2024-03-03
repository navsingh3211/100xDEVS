import express from "express";
import {signin,verifyUser} from "../controllers/auth.js";

const router = express.Router();

const routes = ()=>{
  router.post('/signin',signin);
  router.get('/users',verifyUser);

  return router;
}

export default routes;