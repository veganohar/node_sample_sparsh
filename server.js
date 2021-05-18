const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.listen(port,()=>{
    console.log("Your Application is running on http://localhost:"+port);
});

app.get("/",(req,res)=>{
    res.send("Welcome to Node Js");   
})

app.post("/postMethod",(req,res)=>{
    res.send("Post Method is Working");
})

app.put("/putMethod",(req,res)=>{
    res.send("Put Method is Working");
})

app.delete("/deleteMethod",(req,res)=>{
    res.send("Delete Method is Working"); 
})

app.post("/dataBody",(req,res)=>{
    res.send(req.body);
})
app.post("/dataParams/:name/:age",(req,res)=>{
    res.send(req.params);
})
app.post("/dataQuery",(req,res)=>{
    res.send(req.query);
})
