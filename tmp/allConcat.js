var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  event.preventDefault();
  $('#calculator').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operator = $('input:radio[name=operator]:checked').val();
    var simpleCalculator = new Calculator('hot pink');
    var result = simpleCalculator.calculate(number1, number2, operator);
  $('#goal').prepend(result);
  });
});

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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
