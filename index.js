const express = require("express");
// instantiate an Express application by calling the express method and store it in a variable called app.
const app = express();

const port = 3000;

// This creates a route for our app. The first argument is the path we want to use. The second argument is the router handler, a callback function that will be called when a request is made to the path.
app.get("/",(req,res)=>{
    res.redirect('/jso');
    res.send("Hello world from steve");
});
//This is how to send a JSON response
app.get("/jso",(req,res)=>{
 res.status(200);
 res.json({"response":"Hello babe!"});
});

app.get("/users/:id",(req,res)=>{
 res.send(`user ${req.params.id}`);
});

app.listen(port,()=>{
    console.log(`App running from port ${port}`);
});