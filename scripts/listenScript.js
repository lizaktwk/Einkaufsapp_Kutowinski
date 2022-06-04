let lists = []; // Array to store all ShoppingLists
//loadListsFromLocalStorage()
console.log(lists)
let addedItemsList = []; // Array to store currently added items
let availableItemsList = ["apfel", "banane", "erdbeere", "erdapfel"]; // Array with all possible items
let searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", predict);
let predictionList = document.getElementById("prediction");
let predictions;
let addedItemsHtmlList = document.getElementById("addedItemsList");
let nameInput = document.getElementById("listName");
let popUpDiv = document.getElementById("popup");
let createdListsHtml = document.getElementById("createdLists");

let listView = document.getElementById("listView");


let addListButton = document.getElementById("addListButton");
addListButton.addEventListener("click", showAddListView);


let saveListButton = document.getElementById("saveListButton");
saveListButton.addEventListener("click", saveList);

popUpDiv.style.display = "none";
createdListsHtml.style.display = "block";

displayAllLists();

loadListsFromApi('http://127.0.0.1:3000/')

function showMainView() {
    hideListView();
    hideAddListView();
    addListButton.style.display = "block";
    createdListsHtml.style.display = "block";
    console.log("Show main menu...")
    displayAllLists();
}

function hideMainView() {
    addListButton.style.display = "none";
    createdListsHtml.style.display = "none";
}

function showAddListView() {
    hideMainView();
    popUpDiv.style.display = "block";
}


function hideAddListView() {
    popUpDiv.style.display = "none";
}

function hideListView() {
    listView.style.display = "none";
}

function showListView(shoppingList) {
    hideMainView();
    hideAddListView();
    listView.style.display = "block";
    let listNameHeadline = document.createElement("h2");
    listNameHeadline.innerText = shoppingList.listName;
    let ul = document.createElement("ul");
    shoppingList.itemList.forEach(item => {
        let li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    })
    listView.appendChild(listNameHeadline);
    listView.appendChild(ul);
    let backToMainButton = document.createElement("button");
    backToMainButton.addEventListener("click", cleanUpListView)
    backToMainButton.innerText = "Zurück";
    listView.appendChild(backToMainButton);
}

function cleanUpListView() {
    listView.innerHTML = "";
    showMainView()
}

function saveList() {
    let name = nameInput.value;
    let list = new ShoppingList(addedItemsList, name);
    lists.push(list)
    localStorage.setItem("storedLists", JSON.stringify(Array.from(lists.entries())))
    sendJSONStringWithPOST(
        'http://localhost:3000/',
        JSON.stringify(lists)
    );
    hideAddListView();
    cleanUpAddListView()
    showMainView();
}

function cleanUpAddListView() {
    predictionList.innerHTML = "";
    searchInput.innerHTML = "";
    addedItemsHtmlList.innerHTML = "";
    nameInput.value = "";
    addedItemsList = [];
}

function predict() {
    predictions = [];
    predictionList.innerHTML = "";
    let currentString = searchInput.value;
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
    if (currentString.length === 0) {
        predictionList.innerHTML = "";
    }
}

function addToList(element) {
    let item = element.currentTarget.innerText;
    console.log("added " + item + " to list...");
    addedItemsList.push(item);
    predictionList.innerHTML = "";
    searchInput.value = "";
    let li = document.createElement("li");
    li.innerText = item;
    addedItemsHtmlList.appendChild(li);
}

function loadListsFromLocalStorage() {
    let localStoredLists = localStorage.getItem("storedLists");
    if (localStoredLists != null) {
        let jsonList = JSON.parse(localStoredLists);
        jsonList.forEach(shoppingListBlueprint => {
            let shoppingList = new ShoppingList(shoppingListBlueprint[1]._itemList, shoppingListBlueprint[1]._listName)
            lists.push(shoppingList)
        });
    } else {
        lists = [];
    }
}

function loadListsFromJson(json) {
    if (json != null) {
        let jsonList = JSON.parse(json);
        jsonList.forEach(shoppingListBlueprint => {
            let shoppingList = new ShoppingList(shoppingListBlueprint._itemList, shoppingListBlueprint._listName)
            lists.push(shoppingList)
            console.log("added to list: " + shoppingList.listName)
        });
        displayAllLists();
    } else {
        lists = [];
    }
}


function displayAllLists() {
    console.log("DisplayAllLists...")
    console.log(lists.length)
    createdListsHtml.innerHTML = "";
    lists.forEach(shoppingList => {
        console.log(shoppingList)
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = shoppingList.listName;
        button.addEventListener("click", function () {
            showListView(shoppingList);
        });
        li.appendChild(button);
        createdListsHtml.appendChild(li);
    });


}

async function sendJSONStringWithPOST(url, jsonString) {
    const response = await fetch(url, {
        method: 'post',
        body: jsonString,
    });
}

async function loadListsFromApi(url) {
    const response = await fetch(url);
    console.log('Response', response); // komplettes Response Objekt
    const text = await response.text();
    loadListsFromJson(text)
}
;

