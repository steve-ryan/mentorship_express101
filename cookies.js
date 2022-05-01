const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3000;

// Cookies are used to store information about the user.
app.get("/",(req,res)=>{
     res.cookie("name","stephen");
    res.send("Hello mentees from  Steve");
});

app.listen(port,(req,res)=>{
    res.send(`App running from port ${port}`);
});