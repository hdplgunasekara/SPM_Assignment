const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,

}); 

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected");
});

const articleRoutes = require("./src/api/routes/article.routes");
const userAuthRoutes= require("./src/api/routes/userAuth.routes");
const userRoutes= require("./src/api/routes/user.routes");

app.use("/article",articleRoutes);
app.use("/api/userAuth",userAuthRoutes);
app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})


