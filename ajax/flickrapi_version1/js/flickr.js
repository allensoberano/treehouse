$(document).ready(function (){
  $('button').click(function(){
    $('button').removeClass("selected");
    $(this).addClass("selected");
    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: animal,
      format: "json"
    };
    
    //data is json data returned from flickr
    function displayPhotos(data){
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      });
      photoHTML += '</ul>';
      
      //add it to the page
      $('#photos').html(photoHTML);
    
    }
    //getjson(url, data(jsObject), callback)
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
 
  });
});