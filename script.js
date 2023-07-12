const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


const API_KEY = "a493541018af4dc691c33015baf5d5eb";
const url = "https://newsapi.org/v2/everything?q=";

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

app.get('/news', async (req, res) => {
    console.log('Request received');
    query = "India ";
    const resNews = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await resNews.json();
    console.log(data.articles);
    res.send(data);
    console.log('Response sent');
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {console.log('Server running on port 3000')});

