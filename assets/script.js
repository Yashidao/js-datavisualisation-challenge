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
// Mise en place de th supplémentaire pour la facilité du code
let nbthousand = document.getElementsByTagName("th")[2]
nbthousand.setAttribute("colspan", 3)
for (i = 3; i < 13; i++) {
    let th = document.createElement("th")
    th.style.gap = -30
    document.getElementsByTagName("tr")[0].appendChild(th)
}

// Mise en place des arrays
let arrTemp = []
const table = document.getElementById("table1")

// Array pour les années
let arrYears = []
let nombreTh = 26
let countTh = 0 // Pour éviter les cases vident
for (i = 0; i < nombreTh; i++) {
    if (i >= 15) {
        arrYears[countTh] = document.getElementsByTagName("th")[i].textContent
        countTh++
    }
}

// Array pour les Pays
let arrPays = []
let countTd = 0
let countAdaptTd = 0
for (i = 0; i < 35; i++) {
    if (countAdaptTd == 0) {
        countAdaptTd += 1
        arrPays[i] = document.getElementsByTagName("td")[countTd].textContent
        countTd = countAdaptTd + countTd + 11
    } else if (countAdaptTd == 1) {
        arrPays[i] = document.getElementsByTagName("td")[countTd].textContent
        countTd = countTd + 12
    }
}

// Bouton dropdown selection d'année ET leur valeurs
let slc = document.createElement("select")
slc.setAttribute("id", "Selection")
document.getElementById("canvasPolice").insertAdjacentElement("beforebegin", slc)
for (i = 0; i < arrYears.length; i++) {
    let opt = document.createElement("option")
    opt.setAttribute("value", optionValue(i)) // ici, je call une fonction par rapport à i et les années
    document.getElementById("Selection").appendChild(opt)
    opt.text = arrYears[i]
}
function optionValue(i) {
    arrTemp = []
    switch (i) {
        case 0:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[2].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 1:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[3].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 2:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[4].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 3:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[5].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 4:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[6].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 5:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[7].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 6:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[8].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 7:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[9].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 8:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[10].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 9:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[11].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        case 10:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[12].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
            break
        default:
            for (let i = 0; i < table.rows.length; i++) {
                arrTemp.push(table.rows[i].cells[2].textContent)
                arrTemp[i] = arrTemp[i].replace(",", ".")
            }
            arrTemp.shift()
            arrTemp.shift()
    }
    return arrTemp
}

//Event pour le changement d'année
document.getElementById("Selection").addEventListener('change', choixAnnee)
function choixAnnee() {
    console.log(slc.value)
    graphPolice.data.datasets[0].data = slc.value.split(',')
    graphPolice.update()
}

// Graphique Police
let graphPolice = new Chart(canvasPolice, {
    type: "bar",
    data: {
        labels: arrPays,
        datasets: [
            {
                label: "Crimes by Years",
                data: arrTemp,
                backgroundColor: 'red'
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                ticks: {
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
})