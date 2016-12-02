$(document).ready(function () {



function checkInput(hour, minute) {
    if (hour > 12 || hour < 1) {    // Checks for invalid hour.
      $("#result").val("Invalid Time");
    }
    else if (minute > 59 || minute < 0) {   // Checks for invalid minute.
      $("#result").val("Invalid Time");
    }
    else {
        return true;
    }
};



function printAngle(hour, minute, angle) {
    if ( isNaN(hour) || isNaN(minute) ) {   //Checks if the input is a number.
      $("#result").val("Invalid Time");
    } else if ( angle >= 360) {
      $("#result").val(Math.abs(Number(360 - angle)) + "°");   // Prints Answer
    } else {
      $("#result").val(Math.abs(Number(angle)) + "°");   // Prints Answer
    }
};



  $(".btn").click(function () {

    var hour = $("#hour").val();
    var minute = $("#minute").val();
    var angle = (360 / 12 / 60) * (60 * hour - 11 * minute);

    if (checkInput(hour, minute) == true) {
        printAngle(hour, minute, angle);
    }
  });



});
