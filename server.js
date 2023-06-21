require("dotenv").config();

const express = require('express');

const connectDB = require('./config/db');

const app = express();

//connnect to the database
connectDB()

//inintialize middleware
app.use(express.json({extend:false}));
app.get("/",(req,res)=>{
    res.send("Server is up and running");
})


//serting up port

const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`server is running on https://localhost:${PORT}`);
});