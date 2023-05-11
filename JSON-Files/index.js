const express = require('express');
const app = express();
const PORT = 3002;

const routeController = require('./controllers/route'); 
app.use(express.json());
app.use('/route', routeController);  

app.listen(PORT, () => console.log(`App is running on: ${PORT}`)); 
