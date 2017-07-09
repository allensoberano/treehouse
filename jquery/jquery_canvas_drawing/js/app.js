//Problem: No user interaction causes no change to application
//Soltuion: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


//when clicking on control list items
$(".controls").on("click", "li", function(){
  //Deslect sibling elements
  $(this).siblings().removeClass("selected");
  
  //Select clicked element
  $(this).addClass("selected");
  
  //cache current color
  color = $(this).css("background-color");

});
 
//When New color is pressed
$("#revealColorSelect").click(function(){
 //Show Color Select or hide the color select
  changeColor();
  $("#colorSelect").toggle();

});


function changeColor(){
  var r = $("#red").val();
  var b = $("#blue").val();
  var g = $("#green").val();
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b  + ")");
}

//When color sliders change
$("input[type=range]").on("input", changeColor);

//update the new color span

//When add color is pressed
$("#addNewColor").click(function(){
  //append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  
  //select the new color
  $newColor.click();
                        
});
  

//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
    //Draw lines
  if(mouseDown){
  context.beginPath();
  context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
  context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
  context.stroke();
  lastEvent = e;
  }
  
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});


