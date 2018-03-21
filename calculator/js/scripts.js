$(document).ready(function(){

  var add = function(number1, number2) {
  return number1 + number2;
  };

  var subtract = function(number1, number2) {
  return number1 - number2;
  };

  var multiply = function(number1, number2) {
  return number1 * number2;
  };

  var divide = function(number1, number2) {
  return number1 / number2;
  };

  var number1 = parseInt(prompt("why not enter a number?:"));
  var number2 = parseInt(prompt("enter another number:"));

  alert(add(number1,number2));
});
