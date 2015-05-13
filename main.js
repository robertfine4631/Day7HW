// var $top = document.querySelector("#num_one");
// var $bottom = document.querySelector("#num_two");
// var $addi = document.querySelector("#calculateBtn");
// var $ansBox = document.querySelector("#answer");
// var answer;
// var number1, number2;



// function Addition (x,y) {
// 	return Number(x) + Number(y);
// }

// function showValue () {
// 	answer = Addition($top.value, $bottom.value);
// 	$ansBox.innerHTML = answer;
// }

// addi.addEventListener('click', Addition);


var $input1 = document.querySelector("#num_one");
var $input2 = document.querySelector("#num_two");
var $calculateBtn = document.querySelector("#calculateBtn");
var $answerField = document.querySelector("#answer");
var number1, number2;
var answer;
function calculate(x, y) {
  return Number(x) + Number(y);
}

function showAnswer () {
  answer = calculate($input1.value, $input2.value);
  $answerField.innerHTML = answer;
}

$calculateBtn.addEventListener('click', showAnswer);
