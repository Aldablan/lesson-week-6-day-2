// click event for gray button
$("#grayButton").on("click", switchGray);
// click event for white button
$("#whiteButton").on("click", switchWhite);



function switchGray() {
    // change background to gray
    // change font to white


      $("body").css("background", "gray");
      $("h1").css("color", "white");
      $("p").css("color", "white");
      }



function switchWhite() {
    // change background to white
    // change font to black


    $("body").css("background", "white");
    $("h1").css("color", "black");
    $("p").css("color", "black");
    }
