$(document).ready(function(){
/*	 $(".one").click(function(){
        $("#paragraph").toggle('slow');
    });
    $(selector).action(){};
    */
  /*$(".one").click(function(){
        $("#paragraph").css("background-color","red");
        $("#paragraph").css("padding","100px 0px");
        $("#paragraph").css("color","#fff");
         $("#paragraph").css("font-size","20px");
    });*/
     $("#paragraph").css("background-color","#f1f1f1");
     $("#paragraph").css("padding","100px 10px");
      $("#paragraph1").css("background-color","#F1f1f1");
      $("#paragraph1").css("padding","100px 10px");
      
  $(".one").click(function()
  {
    if ($(".one").html() == "hide"){
        $(".one").html('show');
        $("#paragraph").hide();
    }
   else{
     $(".one").html('hide');
        $("#paragraph").show();
   }
  });


    $(".two").click(function()
  {
    if ($(".two").html() == "hide"){
        $(".two").html('show');
        $("#paragraph1").hide();
    }
   else{
     $(".two").html('hide');
        $("#paragraph1").show();
   }
  });
});

$(document).ready(function(){
  $(".flip").click(function(){
    $(".panel").slideToggle("slow");
  });
});