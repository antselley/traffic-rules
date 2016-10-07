
//find the body tag and store it in a variable called 'body'
var body = document.querySelector("body");

var taxiPositionCounter = 1;

body.onkeydown = function(e){

    //right arrow : 39
    //left arrow  : 37
    //up arrow    : 38
    //down arrow  : 40

    displayMessage(e.keyCode);

////Right Arrow////
    if (e.keyCode === 39) {
      var currentLocation = calculateTaxiLocation(taxiPositionCounter);
      var lightAhead = new TrafficLight(taxiPositionCounter);
      if (lightAhead.state() === "red") {
          taxiPositionCounter += 0;
        }
        else {
          taxiPositionCounter += 1;
        }
      var newLocation = calculateTaxiLocation(taxiPositionCounter);
      moveTaxi(currentLocation,newLocation);
    }

////Left Arrow////
    if (e.keyCode === 37) {
      var currentLocation = calculateTaxiLocation(taxiPositionCounter);
      taxiPositionCounter -= 1;
      var newLocation = calculateTaxiLocation(taxiPositionCounter);
      moveTaxi(currentLocation,newLocation);
    }

////Up Arrow////
    if (e.keyCode === 38) {
      //turn the current traffic light red.
      var lightAhead = new TrafficLight(taxiPositionCounter);
      lightAhead.red();
    }


////Down Arrow////
  if (e.keyCode === 40) {
      var lightInFront = new TrafficLight(taxiPositionCounter);
      lightInFront.green();
    }

//// Turning the light Orange ////
      if (e.keyCode === 79) {
          var lightInFront = new TrafficLight(taxiPositionCounter);
          lightInFront.orange();
        }

    var tl = new TrafficLight(2);

    tl.orange();


};
