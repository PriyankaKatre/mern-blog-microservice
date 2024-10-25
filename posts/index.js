import express from 'express'
import 'dotenv/config'
import { randomBytes } from 'crypto';
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

let posts = {};

app.get('/posts', (req, res) => {
    res.send(posts)
})
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex')
    const { title } = req.body;
    console.log(req.body);
    posts[id]= {
        id,
        title: title
    }
    console.log("posts", posts);
    res.status(201).send(posts[id])
})


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
