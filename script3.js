// Include the dataset
document.write('<script src="pmpmldataset.js"></script>');


// Function to generate reverse route
function getReverseRoute(route) {
  return route.slice().reverse();
}

function preprocessFares() {
  availableBuses.forEach(function(bus) {
    var newFares = {};
    Object.keys(bus.fares).forEach(function(key) {
      // Copy existing fare
      newFares[key] = bus.fares[key];
      
      // Split the key into stops
      var stops = key.split("-");
      
      // Generate reverse key
      var reverseKey = stops[1] + "-" + stops[0];
      
      // Check if reverse key doesn't already exist
      if (!bus.fares.hasOwnProperty(reverseKey)) {
        // Add reverse combination
        newFares[reverseKey] = bus.fares[key];
      }
    });
    
    // Replace original fares with processed fares
    bus.fares = newFares;
  });
}



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

// Populate dropdown lists with stops based on available routes from the boarding stop
function populateDestinationOptions(boardingStop) {
  var destinationSelect = document.getElementById("destinationStop");
  destinationSelect.innerHTML = ""; // Clear existing options
  
  stops.forEach(function(stop) {
    if (canReachDestinationFromBoarding(boardingStop, stop)) {
      var option = document.createElement("option");
      option.text = stop;
      option.value = stop;
      destinationSelect.add(option);
    }
  });
}
// Function to check if a destination stop can be reached from the boarding stop
function canReachDestinationFromBoarding(boardingStop, destinationStop) {
  for (var i = 0; i < availableBuses.length; i++) {
    var bus = availableBuses[i];
    if (bus.route.includes(boardingStop) && bus.route.includes(destinationStop)) {
      return true;
    }
  }
  return false;
}

// Event listener for changes in the boarding stop selection
document.getElementById("boardingStop").addEventListener("change", function() {
  var boardingStop = this.value;
  populateDestinationOptions(boardingStop);
});

// Call the preprocessFares function to preprocess the fares data
preprocessFares();

/*
function getAvailableBuses(boardingStop, destinationStop) {
  var availableBusNames = [];
  
  availableBuses.forEach(function(bus) {
    if (bus.route.includes(boardingStop) && bus.route.includes(destinationStop)) {
      availableBusNames.push(bus.name);
    }
  });
  
  return availableBusNames;
}
*/


/* this was perfect till 133
function showAvailableBuses() {
  var boardingStop = document.getElementById("boardingStop").value;
  var destinationStop = document.getElementById("destinationStop").value;

  var filteredBuses = availableBuses.filter(function(bus) {
    // Check if both boarding and destination stops are in the bus route
    var boardingIndex = bus.route.indexOf(boardingStop);
    var destinationIndex = bus.route.indexOf(destinationStop);

    return (boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex) ||
           (boardingIndex === -1 && destinationIndex !== -1);
  });

  var busList = "<h2>Available Buses</h2>";
  if (filteredBuses.length > 0) {
    busList += "<ul>";
    filteredBuses.forEach(function(bus) {
      var fare = calculateFare(boardingStop, destinationStop, bus);
      busList += "<li>" + bus.name + " - Fare: $" + fare + "</li>";
    });
    busList += "</ul>";

    // Add the "Book Ticket" button
    var fare = calculateFare(boardingStop, destinationStop, filteredBuses[0]);
    busList += "<button onclick='chooseAdults(\"" + filteredBuses[0].name + "\", \"" + boardingStop + "\", \"" + destinationStop + "\", " + fare + ")'>Book Ticket</button>";
  } else {
    busList += "<p>No buses available for the selected stops.</p>";
  }
  document.getElementById("availableBuses").innerHTML = busList;
}
till here from 102*/

// Declare a global array variable to store bus names
var availableBusNames = [];

function showAvailableBuses() {
  var boardingStop = document.getElementById("boardingStop").value;
  var destinationStop = document.getElementById("destinationStop").value;

  // Reset availableBusNames array
  availableBusNames = [];

  var filteredBuses = availableBuses.filter(function(bus) {
    // Check if both boarding and destination stops are in the bus route
    var boardingIndex = bus.route.indexOf(boardingStop);
    var destinationIndex = bus.route.indexOf(destinationStop);

    var isAvailable = (boardingIndex !== -1 && destinationIndex !== -1 && boardingIndex < destinationIndex) ||
                      (boardingIndex === -1 && destinationIndex !== -1);

    // If the bus is available, push its name into availableBusNames array
    if (isAvailable) {
      availableBusNames.push(bus.name);
    }

    return isAvailable;
  });

  var busList = "<h2>Available Buses</h2>";
  if (filteredBuses.length > 0) {
    busList += "<ul>";
    filteredBuses.forEach(function(bus) {
      var fare = calculateFare(boardingStop, destinationStop, bus);
      busList += "<li>" + bus.name + " - Fare: $" + fare + "</li>";
    });
    busList += "</ul>";

    // Add the "Book Ticket" button
    var fare = calculateFare(boardingStop, destinationStop, filteredBuses[0]);
    busList += "<button onclick='chooseAdults(\"" + filteredBuses[0].name + "\", \"" + boardingStop + "\", \"" + destinationStop + "\", " + fare + ")'>Book Ticket</button>";
  } else {
    busList += "<p>No buses available for the selected stops.</p>";
  }
  document.getElementById("availableBuses").innerHTML = busList;
}


// Modify the function chooseAdults() to show the Confirm Ticket button after the ticket preview
function chooseAdults(busName, boardingStop, destinationStop, fare) {
  var adultsContainer = document.getElementById("adultsContainer");
  adultsContainer.innerHTML = ""; // Clear previous buttons
  
  // Create buttons for each option (1 to 5)
  for (var i = 1; i <= 5; i++) {
    var button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", function() {
      var adults = parseInt(this.textContent);
      var totalFare = fare * adults;
      var ticketInfo = document.getElementById("ticketInfo");
      ticketInfo.innerHTML = "<h1>Preview Ticket</h1>" +
                             "<p><strong>From:</strong> " + boardingStop + "</p>" +
                             "<p><strong>To:</strong> " + destinationStop + "</p>" +
                             "<p><strong>Number of Persons:</strong> " + adults + "</p>" +
                             "<p><strong>Total Amount:</strong> $" + totalFare + "</p>";

      // Show the Confirm Ticket button
      var confirmTicketBtn = document.getElementById('confirmTicketBtn');
      confirmTicketBtn.style.display = 'block';
      // Add event listener only if not added before
      if (!confirmTicketBtn.hasEventListener) {
        confirmTicketBtn.addEventListener('click', function() {
          confirmTicket(boardingStop, destinationStop, adults, totalFare,availableBusNames);
          // Remove the event listener to prevent multiple calls
          confirmTicketBtn.removeEventListener('click', arguments.callee);
        });
        confirmTicketBtn.hasEventListener = true; // Flag to indicate event listener is added
      }
    });
    adultsContainer.appendChild(button);
  }
}

// Function to confirm the ticket
function confirmTicket(boardingStop, destinationStop, adults, totalFare,availableBuses) {
  // Create a password input field
  var passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Enter password";
 /* var availableBusesHTML = getAvailableBuses(boardingStop, destinationStop);
*/
  // Create a button to submit the password
  var submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.addEventListener("click", function() {
    var password = passwordInput.value;
    if (password === "1173") {
    var ticketDetails = document.getElementById("ticketInfo").innerHTML;
    var currentTime = new Date();
    var date = currentTime.toDateString();
    var time = currentTime.toLocaleTimeString();

    // Open a new window to display the ticket details
    var ticketWindow = window.open("", "PMPML Ticket", "width=600,height=400");
ticketWindow.document.write("<html><head><title>PMPML Ticket</title>");
ticketWindow.document.write("<style>");
ticketWindow.document.write("body { font-family: Arial, sans-serif; }");
ticketWindow.document.write("h1 { text-align: center; }");
ticketWindow.document.write(".ticket-info { margin-top: 20px; }");
ticketWindow.document.write(".ticket-info p { margin: 5px 0; }");
ticketWindow.document.write(".ticket-info p strong { font-weight: bold; }");
ticketWindow.document.write("</style></head><body>");
ticketWindow.document.write("<img src='download.jpg' alt='PMPML Logo' style='display: block; margin: 0 auto;'>");
ticketWindow.document.write("<h1>PMPML Ticket</h1>");
ticketWindow.document.write("<div class='ticket-info'>");
ticketWindow.document.write("<p><strong>Date:</strong> " + date + "</p>");
ticketWindow.document.write("<p><strong>Time:</strong> " + time + "</p>");
ticketWindow.document.write("<p><strong>From:</strong> " + boardingStop + "</p>");
ticketWindow.document.write("<p><strong>To:</strong> " + destinationStop + "</p>");
ticketWindow.document.write("<p><strong>Bus ID:</strong> " + availableBuses.join(",") + "</p>");
ticketWindow.document.write("<p><strong>Number of Persons:</strong> " + adults + "</p>");
ticketWindow.document.write("<p><strong>Total Amount:</strong> $" + totalFare + "</p>");
ticketWindow.document.write("</div></body></html>");
ticketWindow.document.close();

  } else {
    alert("Incorrect password. Ticket confirmation failed.");
  }
})
// Display the password input and submit button
  var passwordContainer = document.getElementById("passwordContainer");
  passwordContainer.innerHTML = ""; // Clear previous content
  passwordContainer.appendChild(passwordInput);
  passwordContainer.appendChild(submitButton);
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
      var forwardTravel = boardingIndex < destinationIndex;
      
      // Determine the fare key based on the direction of travel
      var fareKey = forwardTravel ? boardingStop + "-" + destinationStop : destinationStop + "-" + boardingStop;
      
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

