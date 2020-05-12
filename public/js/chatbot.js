//initialising all the required variables

let stage = 0;
let name="";
let status="";
let whichInfo="";

//hiding all the response of the chatbot initially 

$(".name").hide();
$(".stage2-query").hide();
$(".stage3-query-classtest").hide();
$(".stage3-query-totalresult").hide();
$(".which-result").hide();

//adding the functionality of the first button

$(".btn-S1").click(function(event){
    stage = 1;
    name = $(".name-textfield").val();
    console.log(typeof(name))
    $("#name1").text("Hello my name is " + name + "!!");
    console.log(name);
    $(".stage1-query").slideUp(500);
    setTimeout(function(){
        $(".name").show();  
    },500);
    $("#name2").text("hey " + name + "!!");
    if(stage == 1){
        setTimeout(function(){
            $(".stage2-query").slideDown(500);
        },1000)
    }
})

//adding functionality to second function

$(".btni-S2").click(function(event){
    whichResult = $(".btni-S2").val();
    $("#which-result").text(whichResult);
    $(".btn-S2").slideUp(500);
    setTimeout(function(){
        $(".which-result").show();
    },500);
    setTimeout(function(){
        $(".stage3-query-classtest").slideDown(500); 
    },1000)

})

//adding functionality to the last button and sending post request to the server

$(".btnr-S2").click(function(event){
    whichResult = $(".btnr-S2").val();
    $("#which-result").text(whichResult);
    $(".btn-S2").slideUp(500);
    setTimeout(function(){
        $(".which-result").show();
    },500);
    setTimeout(function(){
        $(".stage3-query-totalresult").slideDown(500); 
    },1000)
})