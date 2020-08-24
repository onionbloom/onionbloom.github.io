// JavaScript Document

$(document).ready(function(){
  $("#buttonOne").click(function(){
    var click1 = true;
    $("#actorOne").siblings().collapse('hide').on('hidden.bs.collapse',function(){
      if(click1 == true){
        $("#actorOne").collapse('show');
        click1 = false;
      }
    });
  });
  $("#buttonTwo").click(function(){
    var click2 = true;
    $("#actorTwo").siblings().collapse('hide').on('hidden.bs.collapse',function(){
      if(click2 == true){
        $("#actorTwo").collapse('show');
        click2 = false;
      } 
    });
  });
  $("#buttonThree").click(function(){
    var click3 = true;
    $("#actorThree").siblings().collapse('hide').on('hidden.bs.collapse',function(){
      if(click3 == true){
        $("#actorThree").collapse('show');
        click3 = false;
      }
    });
  });
  $("#buttonFour").click(function(){
    var click4 = true;
    $("#actorFour").siblings().collapse('hide').on('hidden.bs.collapse',function(){
      if(click4 == true){
        $("#actorFour").collapse('show');
        click4 = false;
      }
    });
  });
});