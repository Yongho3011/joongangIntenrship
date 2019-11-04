$(document).ready(function () {
    /* topBtn */
    $(".btnTop").on("click", function() {
        $('html,body').scrollTop(0);
    });
    $(".btn_close_mise").on("click", function() {
        window.open('https://mgrg.joins.com/CLabs','_parent').parent.close();
    });
    var pg4BtnFlag = false;
    var Q1Flag = false;
    var Q2Flag = false;
    var Q3Flag = false;
    var Q4Flag = false;
    
    $(".pg4GoBtn").on("click",function(){
        if(pg4BtnFlag == false){
            MovePage("Q1");
            pg4BtnFlag = true;
        }
    });
    
    $("#YesBtn11").on("click",function(){
        if(Q1Flag == false){
            MovePage("Q21");
            Q1Flag = true;
        }
    });
    $("#NoBtn11").on("click",function(){
        if(Q1Flag == false){
            MovePage("Q22");
            Q1Flag = true;
        }
    });
    
    $("#YesBtn21").on("click",function(){
        if(Q2Flag == false){
            MovePage("Q31");
            Q2Flag = true;
        }
    });
    $("#NoBtn21").on("click",function(){
        if(Q2Flag == false){
            MovePage("Q32");
            Q2Flag = true;
        }
    });
    $("#YesBtn22").on("click",function(){
        if(Q2Flag == false){
            MovePage("Q33");
            Q2Flag = true;
        }
    });
    $("#NoBtn22").on("click",function(){
        if(Q2Flag == false){
            MovePage("Q34");
            Q2Flag = true;
        }
    });
    
    $("#YesBtn31").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_stookie");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    $("#NoBtn31").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_tillandsia");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    $("#YesBtn32").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_tillandsia");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    $("#NoBtn32").on("click",function(){
        if(Q3Flag == false){
            MovePage("Q41");
            Q3Flag = true;
        }
    });
    $("#YesBtn33").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_arecapalm");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    $("#NoBtn33").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_yulma");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    $("#YesBtn34").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_staghornfern");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    $("#NoBtn34").on("click",function(){
        if(Q3Flag == false){
            MovePage("plant_moneytree");
            $("#plantGoAllBtn").show();
            Q3Flag = true;
        }
    });
    
    $("#YesBtn41").on("click",function(){
        if(Q4Flag == false){
            MovePage("plant_stookie");
            $("#plantGoAllBtn").show();
            Q4Flag = true;
        }
    });
    $("#NoBtn41").on("click",function(){
        if(Q4Flag == false){
            MovePage("plant_scindapsus");
            $("#plantGoAllBtn").show();
            Q4Flag = true;
        }
    });
    
    $("#plantGoAllBtn").on("click",function(){
        MovePage("plantsAll");
        $(".pageAllICON").css({"display":"block"});
        $("#pgAllGoBack").show();
    });
    //reset
    $("#pgAllGoBack").on("click",function(){
        $(".pageAll,.miseQ,.Plants").css({"display":"none"});
        pg4BtnFlag = false;
        Q1Flag = false;
        Q2Flag = false;
        Q3Flag = false;
        Q4Flag = false;
        var scrollTopDesktopPg4 = $("#pg4").offset().top;
        var scrollTopMobilePg4 = $("#pg4").offset().top - 40;
        var winWidth = $(window).width();
        if(winWidth < 600) {
            $("body,html").animate({
                scrollTop : scrollTopMobilePg4
            },500);
        } else{
            $("body,html").animate({
                scrollTop : scrollTopDesktopPg4
            },500);
        }
    });

    $(".pageAllICON").on("click",function(){
        $(".Plants").css({"display":"none"});
        var iconplant = $(this).attr("id");
        var plantName = iconplant.replace("ICON","plant");
        MovePage(plantName);
        $("#plantGoAllBtn").show();
    });
    
});

function MovePage(DrawID){
    $("#"+DrawID).css({"display":"block"});
    var scrollTopDesktop = $("#"+DrawID).offset().top;
    var scrollTopMobile = $("#"+DrawID).offset().top - 40;
    var winWidth = $(window).width();
    if(winWidth < 600) {
        $("body,html").animate({
            scrollTop : scrollTopMobile
        },500);
    } else{
        $("body,html").animate({
            scrollTop : scrollTopDesktop
        },500);

    }
}