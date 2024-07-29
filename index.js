const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;
// middleware
app.use(express.json());

const blog = require("./routes/blog");
//mount
app.use("/api/v1",blog);
const conncetWithDb = require("./config/database");
conncetWithDb();

app.listen(PORT,()=>{
    console.log(`App is started at port no ${PORT}`);
})

app.get("/",(req,res)=>{
    res.send(`<h1>This is home page baby`)
})

// app.listen(3000,()=>{
//     console.log("App is running successfully");
    
// })
// app.get("/",(req,res)=>{
//     res.send(`<h1>This is home page</h1>`);
// })