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

 
const table = document.getElementById('table2');

let country = [];
let values2 = [];
let values1 = [];

// Itération sur les cellules
for (let i = 1; i < table.rows.length; i++) {
    country.push(table.rows[i].cells[1].innerHTML);
    values1.push(table.rows[i].cells[2].innerHTML);
    values2.push(table.rows[i].cells[3].innerHTML);
    
}

// console.log(country);
// console.log(values1);
// console.log(values2);

let myChart = new Chart(canvasHomicide, {
     data: {
      labels: country, 
      datasets: [{
        type: 'bar',
        label: '2007-2009', 
        data: values1, 
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: [ 
          'rgba(255,99,132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 2 // Définir la largeur du trait de section
      }, {
        type: 'bar',
        label: '2010-2012', 
        data: values2, 
        backgroundColor: 'rgba(255, 206, 86, 0.7)',
        borderColor: [ 
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1 
      }]
    },
    
  });

// TEST
canvasH1.style.backgroundColor = 'red'
canvasPolice.style.backgroundColor = 'red'
canvasHomicide.style.backgroundColor = 'rgba(75, 192, 192, 0.2)'
// let xhr = new XMLHttpRequest;

// xhr.open('GET', 'https://canvasjs.com/services/data/datapoints.php', true);
// xhr.onload = function() 
//   {
//     if (this.status === 200) {
//       let cites = JSON.parse(this.responseText);
//       console.log(cites);
//       // citeText.textContent = cites.quote;
//       // document.querySelector('h2').textContent = cites.author;
      
//     } else {
//       alert('Erreur!')
//     }
//   }
// xhr.send();

