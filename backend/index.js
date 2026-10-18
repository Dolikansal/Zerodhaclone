require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {HoldingsModel} = require('./model/HoldingsModel');
const {PositionsModel} = require('./model/PositionsModel');
const {OrdersModel} = require('./model/OrdersModel');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/authroute');
const PORT = process.env.PORT || 3002;
const MONGO_URI = process.env.MONGO_URL;
const app = express();
app.use(cors({
    origin: "https://zerodha-clone-two-inky.vercel.app", // React frontend ka URL
    credentials: true,
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/allHoldings" , async(req , res) => {
    let allHoldings =  await HoldingsModel.find({});
    res.json(allHoldings);
})
app.use('/api/auth', authRoute);
app.get("/allPositions" , async(req , res) => {
    let allPositions =  await PositionsModel.find({});
    res.json(allPositions);
})

app.post("/newOrder" , async(req , res) =>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode : req.body.mode,
    });
    newOrder.save();
    res.send("Order placed successfully");
})

app.listen(PORT, () => {
    console.log("Server is running on port 3002");
    mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
})