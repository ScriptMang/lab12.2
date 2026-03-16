import express from 'express'
import axios from 'axios'

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Welcome to the Homepage.");
})

app.get('/api/fun-facts', async(req, res)=>{
    try { 
        const apiResponse = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const randomFact = {"fact": apiResponse.data["text"]};
        res.json(randomFact);
    } catch(err) {
        console.error('Failed to fetch fun fact:', err.message);
        res.status(500).json({"error": "Could not fetch fun fact"});
    }
})

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port}`);
})