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
