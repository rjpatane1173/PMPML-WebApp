// Define stops
var stops = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"]

// Define available buses with their routes
var availableBuses = [
    {
id:1,
name:"311",
route:["A","B","C","D","E","F","G","H","I","J"],

fares:{
"A-B":5,
"A-C":10,
"A-D":10,
"A-E":15,
"A-F":15,
"A-G":20,
"A-H":20,
"A-I":25,
"A-J":30,
"B-C":5,
"B-D":10,
"B-E":15,
"B-F":15,
"B-G":20,
"B-H":20,
"B-I":25,
"B-J":25,
"C-D":5,
"C-E":10,
"C-F":15,
"C-G":15,
"C-H":20,
"C-I":20,
"C-J":25,
"D-E":5,
"D-F":10,
"D-G":10,
"D-H":15,
"D-I":15,
"D-J":20,
"E-F":5,
"E-G":5,
"E-H":10,
"E-I":10,
"E-J":15,
"F-G":5,
"F-H":10,
"F-I":10,
"F-J":15,
"G-H":5,
"G-I":5,
"G-J":10,
"H-I":5,
"H-J":10,
"I-J":5
}
},


{
id:7,
name:"317",
route:["F","G","H","I","P","Q"],

fares:{
"F-G":5,
"F-H":10,
"F-I":10,
"F-P":15,
"F-Q":15,
"G-H":5,
"G-I":10,
"G-P":15,
"G-Q":15,
"H-I":5,
"H-P":10,
"H-Q":15,
"I-P":5,
"I-Q":10,
"P-Q":5,
}
},


{
id:4,
name:"314",
route:["P","Q","R","S","L","K","D","N","O","A"],

fares:{
"P-Q":5,
"P-R":10,
"P-S":10,
"P-L":15,
"P-K":15,
"P-D":20,
"P-N":20,
"P-O":25,
"P-A":30,
"Q-R":5,
"Q-S":10,
"Q-L":15,
"Q-K":15,
"Q-D":20,
"Q-N":20,
"Q-O":25,
"Q-A":25,
"R-S":5,
"R-L":10,
"R-K":15,
"R-D":15,
"R-N":20,
"R-O":20,
"R-A":25,
"S-L":5,
"S-K":10,
"S-D":10,
"S-N":15,
"S-O":15,
"S-A":20,
"L-K":5,
"L-D":5,
"L-N":10,
"L-O":10,
"L-A":15,
"K-D":5,
"K-N":10,
"K-O":10,
"K-A":15,
"D-N":5,
"D-O":5,
"D-A":10,
"N-O":5,
"N-A":10,
"O-A":5
}
},


{
id:6,
name:"316",
route:["A","B","P","Q","S","T"],

fares:{
"A-B":5,
"A-P":10,
"A-Q":10,
"A-S":15,
"A-T":15,
"B-P":5,
"B-Q":10,
"B-S":15,
"B-T":15,
"P-Q":5,
"P-S":10,
"P-T":15,
"Q-S":15,
"Q-T":5,
"Q-T":10,
"S-T":5,
}
},
{
id:2,
name:"312",
route:["P","Q","R","S","T","U","V","X"],
fares:{"P-Q":5,
"P-R":5,
"P-S":5,
"P-T":5,
"P-U":10,
"P-V":10,
"P-X":20,
"Q-R":5,
"Q-S":5,
"Q-T":5,
"Q-U":10,
"Q-V":10,
"Q-X":20,
"R-S":5,
"R-T":5,
"R-U":10,
"R-V":10,
"R-X":10,
"S-T":5,
"S-U":5,
"S-V":10,
"S-X":10,
"T-U":5,
"T-V":5,
"T-X":10,
"U-V":5,
"U-X":5,
"V-X":5,
}
}
];

// Function to generate reverse route
function getReverseRoute(route) {
  return route.slice().reverse();
}

// this is try
// Function to preprocess fares and add reverse combinations
// Function to preprocess fares and add reverse combinations
function preprocessFares() {
  availableBuses.forEach(function(bus) {
    var newFares = {};
    Object.keys(bus.fares).forEach(function(key) {
      newFares[key] = bus.fares[key];
      var stops = key.split("-");
      var reverseKey = stops[1] + "-" + stops[0];
      if (!bus.fares.hasOwnProperty(reverseKey)) {
        // Add reverse combination only if it doesn't already exist
        newFares[reverseKey] = bus.fares[key];
      }
    });
    bus.fares = newFares; // Replace original fares with processed fares
  });
}

// this is try ends here from line 58


// Populate dropdown lists with stops
var boardingSelect = document.getElementById("boardingStop");
var destinationSelect = document.getElementById("destinationStop");

stops.forEach(function(stop) {
  var option = document.createElement("option");
  option.text = stop;
  option.value = stop;
  boardingSelect.add(option);
  
  option = document.createElement("option");
  option.text = stop;
  option.value = stop;
  destinationSelect.add(option);
});

// Call the preprocessFares function to preprocess the fares data
preprocessFares();

function showAvailableBuses() {
  var boardingStop = document.getElementById("boardingStop").value;
  var destinationStop = document.getElementById("destinationStop").value;
  
  var filteredBuses = availableBuses.filter(function(bus) {
    // Check if both boarding and destination stops are in the bus route
    var boardingIndex = bus.route.indexOf(boardingStop);
    var destinationIndex = bus.route.indexOf(destinationStop);
    
    if (boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex) {
      return true; // For forward route
    } else {
      var reverseRoute = getReverseRoute(bus.route);
      boardingIndex = reverseRoute.indexOf(boardingStop);
      destinationIndex = reverseRoute.indexOf(destinationStop);
      return boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex; // For reverse route
    }
  });
  
  var busList = "<h2>Available Buses</h2>";
  if (filteredBuses.length > 0) {
    busList += "<ul>";
    filteredBuses.forEach(function(bus) {
      var fare = calculateFare(boardingStop, destinationStop, bus);
      busList += "<li>" + bus.name + " - Fare: $" + fare + "</li>";
    });
    busList += "</ul>";
  } else {
    busList += "<p>No buses available for the selected stops.</p>";
  }

  document.getElementById("availableBuses").innerHTML = busList;
}


// Function to calculate fare based on the chosen stops and bus route
function calculateFare(boardingStop, destinationStop) {
  for (var i = 0; i < availableBuses.length; i++) {
    var bus = availableBuses[i];
    // Check if the boarding and destination stops are in the bus route
    if (bus.route.includes(boardingStop) && bus.route.includes(destinationStop)) {
      // Calculate fare based on the direction of travel in the bus route
      var boardingIndex = bus.route.indexOf(boardingStop);
      var destinationIndex = bus.route.indexOf(destinationStop);
      
      // Determine the direction of travel based on the stop indices
      if (boardingIndex < destinationIndex) {
        var fareKey = boardingStop + "-" + destinationStop;
      } else {
        // If stops are in reverse order, calculate fare using reverse route
        var reverseRoute = getReverseRoute(bus.route);
        var reverseBoardingIndex = reverseRoute.indexOf(boardingStop);
        var reverseDestinationIndex = reverseRoute.indexOf(destinationStop);
        var fareKey = reverseRoute.slice(reverseBoardingIndex, reverseDestinationIndex + 1).join('-');
      }

      // Check if fare is defined for the specific combination
      if (bus.fares.hasOwnProperty(fareKey)) {
        return bus.fares[fareKey];
      } else {
        // If fare is not defined for the specific combination, you can handle it accordingly.
        // For example, you can return a default fare or display an error message.
        return "Fare not available";
      }
    }
  }
  return "No direct bus available";
}
