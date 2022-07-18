// using the module syntax 
const express = require ("express");

const mongoose =  require("mongoose");

const cors = require("cors");

const { routes } = require("./routes/posts");

require("dotenv").config();

// intializing the app
const app = express();

// setting up middlewares globally 
app.use(express.json({ limit:true }));

app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.use("/posts", routes)

// setting the port number 
const PORT = process.env.PORT || 5000;

// this returns a promise 
mongoose.connect(process.env.CONNECTIONURL, {

    useNewUrlParser: true,
    
    useUnifiedTopology: true
    
}).then(() => app.listen(PORT, console.log(`server running on port : ${PORT}`)))
    
    .catch((error) => console.log(error.message));
    
