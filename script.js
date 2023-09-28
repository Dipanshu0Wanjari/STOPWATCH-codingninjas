// Initialize variables for seconds and tens of a second
var seconds = 0;
var tens = 0;

// Get references to HTML elements
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");

var interval; // Variable to store the timer interval

// This function will run when the "Start" button is clicked
function startTimer() {
  tens++; // Increment tenths of a second

  // Display the tens of a second with leading zeros if less than 10
  if (tens < 10) {
    appendTens.innerHTML = "0" + tens;
  }

  // Display the tens of a second without leading zeros if greater than or equal to 10
  if (tens >= 10) {
    appendTens.innerHTML = tens;
  }

  // When tens of a second reach 100, increment seconds and reset tens
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  // Display seconds with leading zero if less than 10
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

// Event handler for the "Start" button click
buttonStart.onclick = function () {
  // If the timer is already running, clear the previous interval
  if (interval) {
    clearInterval(interval);
  }
  
  // Start the timer by setting a new interval that calls startTimer function
  interval = setInterval(startTimer);
};

// Event handler for the "Stop" button click
buttonStop.onclick = function () {
  // Stop the timer by clearing the interval
  clearInterval(interval);
};

// Event handler for the "Reset" button click
buttonReset.onclick = function () {
  // Stop the timer and reset variables
  clearInterval(interval);
  tens = 0;
  seconds = 0;

  // Reset the displayed values to "00"
  appendSeconds.innerHTML = "00";
  appendTens.innerHTML = "00";
};
