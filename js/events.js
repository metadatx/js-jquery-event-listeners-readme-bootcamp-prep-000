//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});

function getIt(){
  $('p').on('click', function(){
    alert("Hey!")
  });
}

function frameIt(){
  $('img').on('load', function(){
    $(this).addClass("tasty");
  });
}

function pressIt(){
  $('input:first').on('keydown', function(){
    if($(this).val() === "G")
      alert("G is pressed");
  });
}

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
  });
}
