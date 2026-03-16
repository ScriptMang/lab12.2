import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to the Homepage.")
})

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`)
})