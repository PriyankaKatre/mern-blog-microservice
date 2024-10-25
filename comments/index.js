import express from "express";
import "dotenv/config";
import { randomBytes } from "crypto";
import bodyParser from "body-parser";
import cors from 'cors'

const app = express();
app.use(bodyParser.json());
app.use(cors())

let commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id]);
});
app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  console.log(req.body);
  let comments = commentsByPostId[req.params.id] || [];
  console.log(comments);
  comments.push({ id: commentId, content: content });
  commentsByPostId[req.params.id] = comments;
    console.log(comments);
  res.status(201).send(commentsByPostId[req.params.id]);
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
