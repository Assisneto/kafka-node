import { Router } from "express";

const routes = new Router();

routes.post("/certifications", async (req, res) => {
  //Micro-service call

  const message = {
    user: { id: 1, name: "Assisneto Damasceno" },
    course: "Kafka with Node",
    grade: 5
  };

  await req.producer.send({
    topic: "issue-certificate",
    messages: [{ value: JSON.stringify(message) }]
  });
  return res.json({ ok: true });
});

export default routes;
