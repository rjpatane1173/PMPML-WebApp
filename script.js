// Define available buses with their routes
var availableBuses = [
  { 
    id: 1, 
    name: "149U", 
    route: [
      { stop: "Nigadi", time: "10:00 AM" },
      { stop: "Yamunanagr", time: "10:30 AM" },
      { stop: "Bird Valley", time: "10:30 AM" },
      { stop: "Gawalimatha", time: "10:30 AM" },
      { stop: "Landewadi", time: "10:30 AM" },
      { stop: "BHosari", time: "10:30 AM" },
      { stop: "Magzine Chowk", time: "10:30 AM" },
      { stop: "Dehu Goan", time: "10:30 AM" },
      { stop: "Wishrantwadi", time: "10:30 AM" },
      { stop: "Jayashree Talkies", time: "11:00 AM" },
      { stop: "Kharadi Bypass", time: "10:30 AM" },
      { stop: "Kharadi Goan", time: "10:30 AM" },
      { stop: "Mundhawa", time: "10:30 AM" },
      { stop: "Hadapsar", time: "10:30 AM" }
    ]
  },
  { 
    id: 2, 
    name: "32U", 
    route: [
      { stop: "Nigadi", time: "11:00 AM" },
      { stop: "Akurdi", time: "11:30 AM" },
      { stop: "Chinchwad", time: "12:00 PM" },
      { stop: "Pimpri", time: "10:30 AM" },
      { stop: "Ajmera", time: "10:30 AM" },
      { stop: "Nehru Nagar", time: "10:30 AM" },
      { stop: "Mahesh NAgar", time: "10:30 AM" },
      { stop: "Vallabh Nagar", time: "10:30 AM" },
      { stop: "Nashik Phata", time: "10:30 AM" }
    ]
  },
  // Add more buses with their routes as needed
];
// Populate dropdown lists with stops
var boardingSelect = document.getElementById("boardingStop");
var destinationSelect = document.getElementById("destinationStop");

// Function to populate dropdown list options
function populateDropdown(selectElement, stops) {
  stops.forEach(function(stop) {
    var option = document.createElement("option");
    option.text = stop;
    option.value = stop;
    selectElement.add(option);
  });
}

// Extract stops from available buses and populate dropdown lists
var stops = [];
availableBuses.forEach(function(bus) {
  bus.route.forEach(function(stop) {
    if (!stops.includes(stop.stop)) {
      stops.push(stop.stop);
    }
  });
});

populateDropdown(boardingSelect, stops);
populateDropdown(destinationSelect, stops);

// Your showAvailableBuses function and other logic can follow here
function showAvailableBuses() {
  var boardingStop = document.getElementById("boardingStop").value;
  var destinationStop = document.getElementById("destinationStop").value;
  
  var filteredBuses = availableBuses.filter(function(bus) {
    // Check if both boarding and destination stops are in the bus route
    var boardingIndex = -1;
    var destinationIndex = -1;
    bus.route.forEach(function(stop, index) {
      if (stop.stop === boardingStop) {
        boardingIndex = index;
      }
      if (stop.stop === destinationStop) {
        destinationIndex = index;
      }
    });
    return boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex;
  });
  
  var busList = "<h2>Available Buses</h2>";
  if (filteredBuses.length > 0) {
    busList += "<ul>";
    filteredBuses.forEach(function(bus) {
      busList += "<li>" + bus.name + "</li>";
    });
    busList += "</ul>";
  } else {
    busList += "<p>No buses available for the selected stops.</p>";
  }
  
  document.getElementById("availableBuses").innerHTML = busList;
}