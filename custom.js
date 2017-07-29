function updateTime(date){
    var timeDiv = document.getElementById("time");
    var time = date.getHours()+":"+date.getMinutes();
	timeDiv.innerHTML =time;
}
setInterval(function(){
	var date = new Date();
	updateTime(date);
	updateClock(date);
},1000);

function updateClock(date){
	var secHand = document.getElementById("sec-hand").style;
	var minHand = document.getElementById("min-hand").style;
	var hrHand = document.getElementById("hr-hand").style;
	var hrHand1 = document.getElementById("sec-hand1").style;
	secHand.transform = "rotate("+date.getSeconds()*6+"deg)";
	minHand.transform = "rotate("+date.getMinutes()*6+"deg)";
	hrHand.transform = "rotate("+(date.getHours()*30+date.getMinutes()*0.5)+"deg)";
	hrHand1.transform = "rotate("+date.getSeconds()*6+"deg)";
}