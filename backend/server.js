// importing
import express from "express";
import mongoose from "mongoose";
import pusher from "pusher";

import Messages from "./dbMessages.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1071549",
  key: "951b6cbb760c52ab3a97",
  secret: "a45e44dda7a17a3fade1",
  cluster: "us2",
  encrypted: true,
});

// middlewares
app.use(express.json());

// DB Config
const connectionURL =
  "mongodb+srv://admin:kA7bFrPqgugOUwvM@cluster0.yitjo.mongodb.net/whatsapp-clone-db?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ???

// api routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessaage = req.body;

  Messages.create(dbMessaage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`New message created: \n ${data}`);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
