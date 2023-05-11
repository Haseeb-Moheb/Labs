const express = require('express');
const app = express();
const PORT = 5002;



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});