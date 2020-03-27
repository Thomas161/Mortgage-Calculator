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

  var f = function() {
    var a = (document.getElementById("demo").innerHTML = monthPayment.toFixed(
      0
    ));
    let barChart = new Chart(myChart, {
      type: "bar",
      data: {
        labels: ["Monthly Payments"],
        datasets: [
          {
            label: "MP ($)",
            data: [a],
            backgroundColor: "green",
            borderColor: "#777",
            color: "red",
            width: "150"
          }
        ]
      },
      options: {}
    });
    console.log("BarChart : ", barChart);
    return barChart;
  };
  console.log("Closure Function : ", f());
  return f;
}

//plotting
// function plotData() {
//   return document.getElementById("tester");
// }

// Plotly.newPlot("tester", [{ y: [plotData()], type: "line" }]);

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
// var modal = document.querySelector(".modal");
// //button
// var btn = document.getElementById("sbt");
// var d = document.getElementById("demo");
// //span to close
// var sp = document.querySelector(".close");

// btn.onclick = function() {
// modal.style.display = "block";
// d.style.display = "block";
// };
// sp.onclick = function() {
// modal.style.display = "none";
// };

// window.onclick = function(event) {
// if (event.target == modal) {
// return (modal.style.display = "none");
// } else {
// return null;
// }
// };
