const express=require("express");

const app=express();

app.get("/",function(req,res){
    res.send("Congratulations! you have created your own server")
})

app.get("/about",function(req,res){
    res.send("This is a about page");
})

app.get("/contact",function(req,res){
    res.send("Contact Page!");
})

app.listen(3000, function (req,res){
    console.log("server is running at port number 3000")
});