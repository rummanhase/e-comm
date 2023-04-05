const express = require("express");

const app = express();

app.get("/" , (req , res)=>{
    res.send("App is Setup")
})

app.use(express.json())

app.use()

app.listen(8000 , ()=>{
    console.log("App is listening at 8000");
})