var term;
var apr;
var amt;
var mPmt;



window.onload = function () {
	document.getElementById("apr").focus();
	document.getElementById("sbt").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues() {
	term = document.getElementById("trm").value;
	apr = document.getElementById("apr").value;
	amt = document.getElementById("amt").value;
	apr /= 1200;
	term *= 12;
	mPmt = calculatePayment();
	document.getElementById("pmt").value = "$" + mPmt.toFixed(2);
	document.getElementById("owe").value = "$"+(mPmt*term).toFixed(2);
}

function calculatePayment() {
	var payment = amt * (apr * Math.pow((1 + apr), term)) / (Math.pow((1 + apr), term) - 1);
	
	return payment;
}



