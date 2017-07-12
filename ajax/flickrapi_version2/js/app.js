$(document).ready(function() {


 $('form').submit(function (evt) {
   
   evt.preventDefault();
   var searchTag = $('#search').val();
   
   var $searchField = $('#search');
   var $submitButton = $('#submit');
   
   $searchField.prop("disabled", true);
   $submitButton.attr("disabled", true).val("searching...");
   
   
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: searchTag,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      
      if (data.items.length === 0){
        photoHTML += "No photos available for tag: " + searchTag;
      } else {
          $.each(data.items,function(i,photo) {
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
      }
      
      
      
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      
      $searchField.prop("disabled", false);
      $submitButton.attr("disabled", false).val("Search");
      
      console.log(data);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    

  }); // end click

}); // end ready