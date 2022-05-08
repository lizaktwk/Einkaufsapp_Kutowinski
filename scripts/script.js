//const decrease = document.querySelector(".decrease")
//decrease.addEventListener("click", () => {
    //output.textContent--
    //console.log("decrease")
//})

//console.log(event.target) --> um zu schauen, auf welches Element gerade zugegriffen wird (sichtbar in Konsole)


//Suche nach einem bestimmten Produkt, das man gerne zur Liste hinzufügen würde
new Script();
 
function Script() {
    let list = ["apfel", "banane", "erdbeere", "erdapfel"];
    let search = document.getElementById("search");
    search.addEventListener("keyup", predict);
    let predictionList = document.getElementById("prediction");
    let predictions;
 
    function predict() {
        predictions = [];
        predictionList.innerHTML = "";
        let currentString = search.value;
        console.log(currentString);
        predictions = list.filter(function (entry) {
            return entry.toLowerCase().startsWith(currentString.toLowerCase())
        })
 
        predictions.forEach(prediction => {
            let li = document.createElement("li");
            li.innerText = prediction;
            li.addEventListener("click", addToList)
            predictionList.appendChild(li)
        })
        console.log(predictions);
        if (currentString.length === 0) {
            predictionList.innerHTML = "";
        }
 
    }
 
    function addToList(element) {
        let item = element.currentTarget.innerText;
        console.log("adding " + item + " to list...");
    }
 
}

  

  






//Akkordeon bei obst.html --> also alle Auflistungen der Produkte in den Unterseiten der Kategorien
//  let accord = document.getElementsByClassName("accordion");
//  let j;

//  for (j = 0; j < accord.length; j++) {
//    accord[j].addEventListener("click", function() {
//      /* Toggle between adding and removing the "active" class,
//      to highlight the button that controls the panel */
//      this.classList.toggle("active");

//      /* Toggle between hiding and showing the active panel */
//      let panel = this.nextElementSibling;
//      if (panel.style.display === "block") {
//        panel.style.display = "none";
//      } else {
//        panel.style.display = "block";
//      }
//    });
//  }

//  function kategorie() {
//       if (document.getElementById("aufklappbar").style.display == "none") {
//         document.getElementById("aufklappbar").style.display = "block";
//       } else {
//         document.getElementById("aufklappbar").style.display = "none";
//       }
//     }


// //Registration Form