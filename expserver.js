const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("Congratulations! you have created your own server")
})

app.get("/about",function(req,res){
    res.send("This is a about page");
})

app.get("/contact",function(req,res){
    res.send("Contact Page!");
})

app.get("/calculator",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/calculator",function(req,res){
    // res.send("thanks for the respose")
    console.log(req.body)

    let n1=Number(req.body.v1);
    let n2=Number(req.body.v2);
    let sum=Number(n1+n2);
    res.send("Sum of the two number is "+sum)
})
 
app.listen(3000, function (req,res){
    console.log("server is running at port number 3000")
});