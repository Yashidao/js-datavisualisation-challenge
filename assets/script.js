// Création des canvas
// je crée l'élément "canvasH1"
// Je lui attribue un id
// Je le lie en enfant de H1 => id : firstHeading
let canvasH1 = document.createElement("canvas")
canvasH1.setAttribute("id", "canvasH1")
document.getElementById("firstHeading").insertAdjacentElement("afterend", canvasH1)

let canvasPolice = document.createElement("canvas")
canvasPolice.setAttribute("id", "canvasPolice")
document.getElementById("table1").insertAdjacentElement("beforebegin", canvasPolice)



let canvasHomicide = document.createElement("canvas");
canvasHomicide.setAttribute("id", "canvasHomicide");
document.getElementById("table2").insertAdjacentElement("beforebegin", canvasHomicide);


let myChart = new Chart(canvasHomicide, {
  type: 'bar',
  data: {
    labels: [
    'first',
    'second',
    '3',
    '4',
    '5',
  ],
  datasets: [{
      label: 'My First dataset',
      color: 'green',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      barPercentage: 0.5,
      barThickness: 16,
      maxBarThickness: 88,
      minBarLength: 2,
      data: [10, 20, 30, 40, 50]
    }]

  },
  
});





// TEST
canvasH1.style.backgroundColor = 'red'
canvasPolice.style.backgroundColor = 'red'
// canvasHomicide.style.backgroundColor = 'red'
