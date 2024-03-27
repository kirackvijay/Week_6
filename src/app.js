const express = require('express');
const app = express();
const cors = require('cors');
const port= 3000;
app.use(cors());
const FoodDetails = require('./models/foodInfo');
require('./db/connection');
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h1>Creation of FOOD API<h1>')
});

app.get('/getfooditems', async(req,res)=>{
    try{
        const getFood = await FoodDetails.find({});
        res.status(201).send(getFood);
    }
    catch(e){
        console.log(e);
    }
});

app.post('/fooditems', async(req,res)=>{
    try{
        const addFoodItems = new FoodDetails(req.body);
        const insertData = await addFoodItems.save();
        console.log(insertData);
        res.status(201).send(insertData);
    }
    catch(e){
        console.log(e);
    }
});

app.listen(port, ()=>{
    console.log(`Server is listening at port number : ${port}`);
});