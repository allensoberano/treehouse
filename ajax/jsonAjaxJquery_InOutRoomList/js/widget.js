$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
    }); // end getJSON
    
    //second JSON Request
    $.getJSON('../data/rooms.json', function(data){
      var openStatusHTML = '<ul class="rooms">'
      console.log(data);
      $.each(data, function(index, room) {
        if (room.available === true) {
          openStatusHTML += '<li class="empty">';
        } else {
          openStatusHTML += '<li class="full">';
      }
        openStatusHTML += room.room + '</li>';
      });
      
      openStatusHTML += '<ul>';
      $('#roomList').html(openStatusHTML)
                
  }); // end getJSON
}); // end ready