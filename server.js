require('./Config/config')
const routeRestaurant = require('./Router/restaurantRouter')
const express = require('express');
const app = express();
app.use(express.json());
app.use('/api', routeRestaurant)
PORT = 6000;


app.get('/', (req, res)=>{
    res.send('welcome to our restaurant');
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on Port: ${PORT}`);
})