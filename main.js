var $top = document.querySelector("#num_one");
var $bottom = document.querySelector("#num_two");
var $addi = document.querySelector("#calculateBtn");
var $ansBox = document.querySelector("#answer");
var answer;
var number1, number2;



function Addition (x,y) {
	return Number(x) + Number(y);
}

function showValue () {
	answer = Addition($top.value, $bottom.value);
	$ansBox.innerHTML = answer;
}

$addi.addEventListener('click', showValue);

