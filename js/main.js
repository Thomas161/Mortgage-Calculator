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

// function validateFields() {
//   var err;

//   var term = document.getElementById("term");
//   var amount = document.getElementById("amount");
//   var interest = document.getElementById("int");
//   console.log(term.style);
//   console.log(amount);
//   console.log(interest);

//   if (
//     (isNaN(term) && term.value.trim() == "") ||
//     (isNaN(amount) && amount.value.trim() == "") ||
//     (isNaN(intrest) && interest.value.trim() == "")
//   ) {
//     err = "no good";
//     return false;
//   } else {
//     err = green;
//     true;
//   }
//   document.getElementById("demo").innerHTML = err;
// }
// validateFields();

//modal
var modal = document.getElementById("myModal");
//button
var btn = document.getElementById("sbt");
//span to close
var sp = document.getElementById("close");
btn.onclick = function() {
  modal.style.display = "block";
};
sp.onclick = function() {
  modal.style.block = "none";
};

window.onclick = event => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
