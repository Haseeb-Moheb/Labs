const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 4008; 
const routeController = require('./controllers/route');

// const secondWord = require('./controllers/second-word');
// const { logTime } = require('./assets'); 

// app.use(logTime); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true} )); 

app.use('/route', routeController); 
// app.use('/second-word', secondWord); 

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
}); 
