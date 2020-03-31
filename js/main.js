window.onload = function() {
  document.getElementById("sbt").onclick = getValues;
  // document.getElementById("res").onclick = resetValues;
};
var term, interest, amount, monthPayment;
//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues() {
  term = document.getElementById("term").value;
  interest = document.getElementById("int").value;
  amount = document.getElementById("amount").value;

  if (/^(?!.*\d\d)/.test(term) && (term === "" || term === null)) {
    console.log("No good");
    return false;
  }
  if (/^(?!.*\d\d)/.test(amount) && (amount === "" || amount === null)) {
    console.log("No good");
    return false;
  }
  if (
    /^(?!.*\d\d\d\d\d\d)/.test(interest) &&
    (interest === "" || interest === null)
  ) {
    console.log("No good");
    return false;
  } else {
    term *= 12;
    interest /= 1200;
    var one = interest * Math.pow(1 + interest, term);
    var two = Math.pow(1 + interest, term) - 1;
    var solution = one / two;
    monthPayment = amount * solution;

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
              backgroundColor: "gold",
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
      console.log(`BarChart : ${new Date()}`, barChart);
      return barChart;
    };
    console.log(`Closure Function : ${new Date()}`, f());
    return f;
  }
}

function reload() {
  location.reload();
  return false;
}
