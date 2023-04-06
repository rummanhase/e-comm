const express = require("express");
const cors = require("cors");
const router = require('./router/router')
require("./db/db.config")
const app = express();

app.get("/" , (req , res)=>{
    res.send("App is Setup")
})

app.use(cors())
app.use(express.json())

app.use('/' , router)

app.listen(8005 , ()=>{
    console.log("App is listening at 8005");
})