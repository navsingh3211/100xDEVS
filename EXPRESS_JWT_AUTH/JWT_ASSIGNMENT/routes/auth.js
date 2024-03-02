import express from "express";
import {signin} from "../controllers/auth.js";

const router = express.Router();

const routes = ()=>{
  router.post('/signin',signin);

  return router;
}

export default routes;