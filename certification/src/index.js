import { Kafka } from "kafkajs";

const kafka = new Kafka({
  brokers: ["localhost:9092"],
  clientId: "certificate"
});

const topic = "issue-certificate";
const consumer = kafka.consumer({ groupId: "certificat-group" });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ topc, partition, message }) => {
      const prefix = `${topic}[${partition} | ${message.offset}] / ${
        message.timestamp
      }`;
      console.log(`-${prefix} ${message.key}# \n${message.value}`);
    }
  });
}

run().catch(console.error);
