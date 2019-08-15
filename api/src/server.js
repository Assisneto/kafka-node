import express from "express";
import { Kafka } from "kafkajs";

import routes from "./router";

const app = express();

const kafka = new Kafka({
  clientId: "api",
  brokers: ["localhost:9092"],
  retry: {
    initialRetryTime: 300,
    retries: 10
  }
});

const producer = kafka.producer();

app.use((req, res, next) => {
  req.producer = producer;

  return next();
});

app.use(routes);

async function run() {
  await producer.connect();
  app.listen(3003, () => {
    console.log("Server on");
  });
}

run().catch(console.error);
