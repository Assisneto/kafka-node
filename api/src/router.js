import { Router } from "express";

const routes = new Router();

routes.post("/certifications", (req, res) => {
  //Micro-service call
  return res.json({ ok: true });
});

export default routes;
