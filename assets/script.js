// Création des canvas
// je crée l'élément "canvasH1"
// Je lui attribue un id
// Je le lie en enfant de H1 => id : firstHeading
let canvasH1 = document.createElement("canvas");
canvasH1.setAttribute("id", "canvasH1");
document
  .getElementById("firstHeading")
  .insertAdjacentElement("afterend", canvasH1);

let canvasPolice = document.createElement("canvas");
canvasPolice.setAttribute("id", "canvasPolice");
document
  .getElementById("table1")
  .insertAdjacentElement("beforebegin", canvasPolice);

let canvasHomicide = document.createElement("canvas");
canvasHomicide.setAttribute("id", "canvasHomicide");
document
  .getElementById("table2")
  .insertAdjacentElement("beforebegin", canvasHomicide);

window.onload = function () {
  var dataPoints = [];
  var chart;
  $.getJSON(
    "https://canvasjs.com/services/data/datapoints.php",
    function (data) {
      $.each(data, function (key, value) {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
      });
      chart = new CanvasJS.Chart("chartContainer", {
        title: {
          text: "Graph",
        },
        data: [
          {
            type: "line",
            dataPoints: dataPoints,
          },
        ],
      });
      chart.render();
      updateChart();
    }
  );
  function updateChart() {
    $.getJSON(
      "https://canvasjs.com/services/data/datapoints.php" +
        (dataPoints.length + 1) +
        "&ystart=" +
        dataPoints[dataPoints.length - 1].y +
        "&length=1&type=json",
      function (data) {
        $.each(data, function (key, value) {
          dataPoints.push({
            x: parseInt(value[0]),
            y: parseInt(value[1]),
          });
        });
        chart.render();
        setTimeout(function () {
          updateChart();
        }, 1000);
      }
    );
  }
};