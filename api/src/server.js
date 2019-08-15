import express from "express";
import { Kafka } from "kafkajs";
import routes from "./router";

const app = express();

const kafka = new Kafka({
  clientId: "api",
  brokers: ["kafka:9092"]
});

app.use(routes);

const producer = kafka.producer();

async function run() {
  await producer.connect();
  app.listen(3000);
}
