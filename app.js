const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs")

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/grades",{useNewUrlParser:true,useUnifiedTopology: true})

const gradeSchema = new mongoose.Schema({
    "Class Roll":Number,
    "CT-1 (Marks: 20)":Number,
    "CT-2 (Marks: 20)":Number,
    "CT-3 (Marks: 20)":Number,
    "CT-4 (Marks: 20)":Number,
    "CT-5 (Marks: 20)":Number,
    "Class Test (Total of best 4, Marks: 80)":Number,
    "Attendance (Marks: 20)":Number,
    "Observation (Marks: 20)":Number,
    "Total (Marks: 120)":Number,
    "Sec A (140)":Number,
    "Sec B":Number,
    "Final Mark": Number,
})
let data = [];
const Grade = mongoose.model("Grade",gradeSchema,"grade");

app.get("/",function(req,res){
    res.render("home");
})

app.get("/chatbot",function(req,res){
    res.render("chatbot");
})

app.get("/result",function(req,res){
    console.log(data);
    res.render("result",{data:data});
})

app.get("/about",function(req,res){
    res.render("about");
})

app.get("/notFound",function(req,res){
    res.render("notFound");
})

app.post("/chatbot",function(req,res){
    console.log(req.body);
    const enrollNo = Number(req.body.stdRoll);
    const button = req.body.button;
    Grade.find({"Class Roll":enrollNo},function(err,foundItems){
        if(err){
            console.log(err)
        }else{
            if(foundItems.length === 0){
                res.redirect("/notFound");

            }else{
                console.log(foundItems);
                if(button === "classtest"){
                    const item1 = {
                        entry:foundItems[0]["Class Roll"],
                        name:"Class Roll"
                    }
                    const item2 = {
                        entry:foundItems[0]["CT-1 (Marks: 20)"],
                        name:"CT-1 (Marks: 20)"
                    } 
                    const item3 = {
                        entry:foundItems[0]["CT-2 (Marks: 20)"],
                        name:"CT-2 (Marks: 20)"
                    } 
                    const item4 = {
                        entry:foundItems[0]["CT-3 (Marks: 20)"],
                        name:"CT-3 (Marks: 20)"
                    } 
                    const item5 = {
                        entry:foundItems[0]["CT-4 (Marks: 20)"],
                        name:"CT-4 (Marks: 20)"
                    } 
                    const item6 = {
                        entry:foundItems[0]["CT-5 (Marks: 20)"],
                        name:"CT-5 (Marks: 20)"
                    } 
                    const item7 = {
                        entry:foundItems[0]["Class Test (Total of best 4, Marks: 80)"],
                        name:"Class Test (Total of best 4, Marks: 80)"
                    } 
                    const columns = [item1,item2,item3,item4,item5,item6,item7];
                    data = columns;
                    res.redirect("/result");
                }else{
                    const item1 = {
                        entry:foundItems[0]["Class Roll"],
                        name:"Class Roll"
                    }
                    const item2 = {
                        entry:foundItems[0]["CT-1 (Marks: 20)"],
                        name:"CT-1 (Marks: 20)"
                    } 
                    const item3 = {
                        entry:foundItems[0]["CT-2 (Marks: 20)"],
                        name:"CT-2 (Marks: 20)"
                    } 
                    const item4 = {
                        entry:foundItems[0]["CT-3 (Marks: 20)"],
                        name:"CT-3 (Marks: 20)"
                    } 
                    const item5 = {
                        entry:foundItems[0]["CT-4 (Marks: 20)"],
                        name:"CT-4 (Marks: 20)"
                    } 
                    const item6 = {
                        entry:foundItems[0]["CT-5 (Marks: 20)"],
                        name:"CT-5 (Marks: 20)"
                    } 
                    const item7 = {
                        entry:foundItems[0]["Class Test (Total of best 4, Marks: 80)"],
                        name:"Class Test (Total of best 4, Marks: 80)"
                    } 
                    const item8 = {
                        entry:foundItems[0]["Attendance (Marks: 20)"],
                        name:"Attendance (Marks: 20)"
                    }
                    const item9 = {
                        entry:foundItems[0]["Observation (Marks: 20)"],
                        name:"Observation (Marks: 20)"
                    }
                    const item10 = {
                        entry:foundItems[0]["Total (Marks: 120)"],
                        name:"Total (Marks: 120)"
                    }
                    const columns = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10];
                    data = columns;
                    res.redirect("/result")
                }
            }
        }
    })

})

app.listen(3000,function(){
    console.log("Server has started");
})