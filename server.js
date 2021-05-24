const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./app/config/db.config");

mongoose.connect(`mongodb://${config.HOST}:${config.PORT}/${config.DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Successfully COnnected to DB");
}).catch((err)=>{
    console.log(err);
    process.exit();
});

app.use(bodyParser.json());
app.listen(port,()=>{
    console.log("Your Application is running on http://localhost:"+port);
});

app.get("/",(req,res)=>{
    res.send("Welcome to Node Js");   
})


require("./app/routes/test.route")(app);