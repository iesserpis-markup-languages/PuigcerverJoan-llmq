// Global variable that stores the click counter
let counter = 0;

// We wait to the document to be ready in order to assign the event handlers
$(document).ready(function() {
    
  // We define the behaviour when the element with id "increment-button" is clicked
  $("#increment-button").click(function() {
    // Counter increment. Equivalent to "counter += 1"
    counter++;
    // We set the content of the element with id "result" to the counter value
    $("#result").text(counter);
  });

})
