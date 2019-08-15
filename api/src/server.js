import express from "express";

const app = express();

app.post("/certifications", (req, res) => {
  //Micro-service call
  return res.json({ ok: true });
});

app.listen(3000);
