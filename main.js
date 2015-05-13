var top = document.querySelector("#num_one");
var bottom = document.querySelector("#num_two");
var addi = document.querySelector("#calculateBtn");
var ans = document.querySelector("#answer");

addEventListener

function Addition() {
	var topNum = Number(top.value);
	var bottomNum = Number(bottom.value);
	var total = topNum + bottomNum;
	ans.innerHTML = sum.toString(); 
}

addi.addEventListener('click', Addition);