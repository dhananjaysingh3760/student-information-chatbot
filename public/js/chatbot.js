let stage = 0;
let name="";
let status="";
let whichInfo="";

$(".name").hide();
$(".stage2-query").hide();
$(".stage3-query-info").hide();
$(".stage3-query-result").hide();
$(".which-info").hide();

$(".btn-S1").click(function(event){
    stage = 1;
    name = $(".name-textfield").val();
    console.log(typeof(name))
    $("#name1").text("people call me " + name + "!!");
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

$(".btni-S2").click(function(event){
    whichInfo = $(".btni-S2").val();
    $("#which-info").text(whichInfo);
    $(".btn-S2").slideUp(500);
    setTimeout(function(){
        $(".which-info").show();
    },500);
    setTimeout(function(){
        $(".stage3-query-info").slideDown(500); 
    },1000)

})

$(".btnr-S2").click(function(event){
    whichInfo = $(".btnr-S2").val();
    $("#which-info").text(whichInfo);
    $(".btn-S2").slideUp(500);
    setTimeout(function(){
        $(".which-info").show();
    },500);
    setTimeout(function(){
        $(".stage3-query-result").slideDown(500); 
    },1000)
})