let lists = new Map();


console.log("Test");
let addListButton = document.getElementById("addListButton");
addListButton.addEventListener("click", addList);
console.log(addListButton);

let popUpDiv = document.getElementById("popup");
function addList() {
    console.log("clickes")
    popUpDiv.style.display = "block";
    new PredictionHandler(crypto.randomUUID());
}
popUpDiv.style.display = "none";

function closePopup() {
    popUpDiv.style.display = "none";

}

function PredictionHandler(name) {
    let addedItemsList = [];
    let availableItemsList = ["apfel", "banane", "erdbeere", "erdapfel"];
    let search = document.getElementById("search");
    search.addEventListener("keyup", predict);
    let predictionList = document.getElementById("prediction");
    let predictions;
    let addedItemsHtmlList = document.getElementById("addedItemsList");

    let saveListButton = document.getElementById("saveListButton");
    saveListButton.addEventListener("click", saveList);

    document.getElementById("listName").value = name;

    function saveList() {
        console.log("SaveList");
        lists.set(name, addedItemsList);
        closePopup();
        localStorage.lists = lists;
    }


    function predict() {
        predictions = [];
        predictionList.innerHTML = "";
        let currentString = search.value;
        console.log(currentString);
        predictions = availableItemsList.filter(function (entry) {
            return entry.toLowerCase().startsWith(currentString.toLowerCase());
        });

        predictions.forEach(prediction => {
            let li = document.createElement("li");
            let button = document.createElement("button");
            button.innerText = prediction;
            button.addEventListener("click", addToList);
            li.appendChild(button);
            predictionList.appendChild(li);
        });
        console.log(predictions);
        if (currentString.length === 0) {
            predictionList.innerHTML = "";
        }

    }

    function addToList(element) {
        let item = element.currentTarget.innerText;
        console.log("added " + item + " to list...");
        addedItemsList.push(item);
        predictionList.innerHTML = "";
        search.value = "";

        let li = document.createElement("li");
        li.innerText = item;
        addedItemsHtmlList.appendChild(li);


    }

   


}