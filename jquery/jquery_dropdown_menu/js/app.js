//Problem: Looks gross in smaller browser widths and devices
//Solution: Hide Text links and swap out with more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $("<option></option>");
  
  //Deal with selected options depending on currrent page
  if($anchor.parent().hasClass("selected")){
     
  $option.prop("selected", true);
  }
  
  //option's value is the href value
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  
  //append option to select
  $select.append($option);
  
});


//Bind change listener to the selection
$select.change(function(){
    //Go to selects location
  window.location = $select.val();
  
});



