import express from 'express'
import 'dotenv/config'

const app = express();

app.get('/posts', (req, res) => {

})
app.post('/posts', (req, res) => {

})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})
