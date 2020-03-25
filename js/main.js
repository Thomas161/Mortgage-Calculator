var term, interest, amount, monthPayment;

window.onload = function() {
  document.getElementById("sbt").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues() {
  term = document.getElementById("term").value;
  interest = document.getElementById("int").value;
  amount = document.getElementById("amount").value;

  term *= 12;
  interest /= 1200;
  monthPayment =
    (amount * (interest * Math.pow(1 + interest, term))) /
    (Math.pow(1 + interest, term) - 1);
  return (document.getElementById("pmt").value = monthPayment.toFixed(2));
}
getValues();

function validateFields() {
  var text;
  var t = document.getElementById("term");
  var a = document.getElementById("amount");
  var i = document.getElementById("int");
  if (t === null && t === undefined && t === "") {
    text = "needs an input";
  } else if (a === null && a === undefined && a === "") {
    text = "needs an input";
  } else if (i === null && i === undefined && i === "") {
    text = "needs an input";
  } else {
    text = "";
  }
  return (document.getElementById("demo").innerHTML = text);
}
validateFields();
