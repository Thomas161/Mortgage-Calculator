var term, interest, amount, monthPayment, fr, err;

window.onload = function() {
  document.getElementById("sbt").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues() {
  validateFields();
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
            width: "70",
            height: "70"
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Mortgage Month Payments ($)",
          fontSize: 25
        },
        legend: {
          position: "right"
        },
        layout: {
          padding: {
            left: 600,
            right: 0,
            bottom: 1000,
            top: 0
          }
        }
      }
    });
    console.log("BarChart : ", barChart);
    return barChart;
  };
  console.log("Closure Function : ", f());
  return f;
}

function validateFields() {
  var t = document.getElementById("term");
  var a = document.getElementById("amount");
  var i = document.getElementById("int");

  if (isNaN(t.value)) {
    alert("no good");
  }
  if (isNaN(a.value)) {
    alert("no good");
  }
  if (isNaN(i.value)) {
    alert("no good");
  }

  return true;
}
validateFields();

//   .addEventListener("change", validateFields);
// fr.addEventListener("submit", e => {
//   var messages = [];
//   if (isNaN(term) || term === "" || term === null) {
//      messages.push("no good");
//     alert("no good");
//   }
//   if (isNaN(amount) || amount === "" || amount === null) {
//     messages.push("no good");
//   }
//   if (isNaN(interest) || interest === "" || interest === null) {
//     messages.push("no good");
//   }
//   if (messages.length > 0) {
//     e.preventDefault();
//     err.innerText = messages.join();
//   }

//   //document.getElementById("mess").innerHTML = err;
// });
// term = document
//   .getElementById("term")
//   .addEventListener("change", validateFields);
// amount = document
//   .getElementById("amount")
//   .addEventListener("change", validateFields);
// interest = document
//   .getElementById("int")
//   .addEventListener("change", validateFields);
// console.log(term);
// console.log(amount);
// console.log(interest);

// fr = document.getElementById("fuzz");
// err = document.getElementById("mess");
