var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#pongify-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    console.log(goal)
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element){
      $('#solution').append('<li>' + element + '</li>');
    });
  });
});
