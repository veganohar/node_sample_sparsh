const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("Your Application is running on http://localhost:"+port);
});

app.get("/",(req,res)=>{
    res.send("Welcome to Node Js");   
})
