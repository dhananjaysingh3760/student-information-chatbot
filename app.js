const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home");
})

app.get("/chatbot",function(req,res){
    res.render("chatbot");
})

app.get("/creator",function(req,res){
    res.render("creator");
})

app.get("/about",function(req,res){
    res.render("about");
})

app.post("/chatbot",function(req,res){
    console.log(req.body);
})

app.listen(3000,function(){
    console.log("Server has started");
})