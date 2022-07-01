//Funktion: Suche nach Produkt

let lists = []; // Array to store all ShoppingLists
//loadListsFromLocalStorage()
console.log(lists);
let addedItemsList = []; // Array to store currently added items
let availableItemsList = ["Apples", "Apricot", "Artichokes", "Arugula", "Asparagus", "Avocado", "Bananas", "Basil", "Beets",
    "Bell pepper", "Berries", "Blackberries", "Blueberries", "Broccoli", "Cabbage", "Carrots", "Cauliflower", "Celery", "Cherries",
    "Chives", "Cilantro", "Cranberries", "Cucumber", "Dates", "Eggplant", "Fennel", "Figs", "Garlic", "Ginger", "Grapefruit", "Grapes",
    "Herbs", "Kiwis", "Leek", "Lemon", "Lettuce", "Lime", "Mandarins", "Mango", "Melon", "Mint", "Mushrooms", "Nectarine", "Olives",
    "Onions", "Orange", "Parsley", "Passion fruit", "Peach", "Pears", "Peas", "Pineapple", "Poatatoes", "Prunes", "Radish", "Rhubarb",
    "Sage", "Salad", "Scallions", "Spinach", "Squash", "Strawberries", "Sun dried tomatoes", "Sweet corn", "Sweet potatoes", "Thyme",
    "Tomatoes", "Watermelon", "Zucchini","Bagels", "Baguette", "Bread", "Buns", "Crispbread", "Croissant", "Dinner Rolls", "Donuts", "Muffins", "Pancakes mix", "Pie",
	"Pizza dough", "Puff pastry", "Rolls", "Scones", "Sliced Bread", "Toast", "Tortillas", "Waffles", "Blue Cheese", "Butter", "Cheddar", "Cheese", "Cottage Cheese", "Cream", "Cream cheese", "Creme fraiche", "Eggs", "Feta", "Gorgonzola",
	"Grated cheese", "Margarine", "Mascarpone", "Milk", "Mozzarella", "Parmesan", "Quark", "Ricotta", "Sour cream", "Soy Milk", "Yogurt",
    "Anchovies", "Bacon", "Beef", "Bratwurst", "Chicken", "Chicken breast", "Cold cuts", "Fish", "Ground meat", "Ham", "Hot Dog",
	"Lamb", "Lobster", "Meat", "Mussels", "Oysters", "Pork", "Prosciutoo", "Salami", "Salmon", "Sausage", "Shrimp", "Sliced beef",
	"Steak", "Tuna", "Turkey", "Turkey breast", "Veal", "Almonds", "Apple sauce", "Baking powder", "Baking soda", "Balsamic vinegar", "BBQ sauce", "Beans", "Black pepper", "Breadcrumbs",
	"Canned tomatoes", "Chutney", "Cinnamon", "Coconut Milk", "Cornbread Stuffing", "Cornflour", "Dip", "Gravy", "Hazelnuts", "Hot sauce",
	"Icing sugar", "Ketchup", "Lentils", "Maple Syrup", "Mashed Potatoes","Mayonnaise", "Mustard", "Nuts", "Oil", "Olive oil",
	"Oregano", "Paprika", "Pasta sauce", "Peanut butter", "Peppercorns", "Pine nuts", "Rosemary", "Salad dressing", "Salt", "Soy Sauce",
	"Stock", "Sugar", "Tomato puree", "Tomato sauce", "Vanilla", "Vinegar", "Walnuts", "Yeast", "Baked Beans", "Burritos", "Chicken Wings", "Chinese Food", "Dumplings", "Fish sticks", "French fries", "Frozen fruits",
	"Frozen vegetables", "Ice cream", "Indian food", "Italian food", "Lasagna", "Mexican food", "Pizza", "Soup", "Thai food",
    "Basmati rice", "Cereal", "Chickpeas", "Corn flakes", "Couscous", "Flour", "Muesli", "Noodles", "Oatmeal", "Pasta", "Penne",
	"Rice", "Risotto rice", "Semolina", "Spaghetti", "Tofu", "Wild rice", "Cake", "Candy", "Cereal bar", "Chewing Gum", "Chips", "Chocolate", "Cookies", "Crackers", "Dessert", "Dried fruit", "Gingerbread",
	"Honey", "Jam", "Jello", "Marshmallows", "Nougat cream", "Peanuts", "Popcorn", "Pretzels", "Pudding", "Snacks", "Tortilla Chips",
    "Apple juice", "Beer", "Beverages", "Bottled water", "Champagne", "Cider", "Cigarettes", "Coffee", "Coffee Beans", "Coffe Capsules",
	"Coffee Pads", "Cola", "Diet Cola", "Diet Soda", "Energy drink", "Fruit juice", "Gin", "Ginger Ale", "Hot Chocolate", "Iced Tea",
	"Orange juice", "Prosecco", "Red wine","Rose wine","Rum", "Smoothie", "Soda", "Spirits", "Sports drink", "Tea", "Tonic Water", "Vodka",
	"Water", "Whiskey", "White wine", "Aluminium foil", "Baby food", "Bathroom cleaner", "Batteries", "Candles", "Cleaning supplies", "Cutlery", "Dishwasher salt",
	"Dishwasher Tabs", "Dishwasher liquid", "Fabric softener", "Flowers", "Garbage bags", "Gift", "Glass cleaner", "Laundry detergent",
	"Light bulb", "Napkins", "Paper towels", "Parchment paper", "Plastic wrap", "Sponge", "Toilet cleaner", "Wrapping paper", "Bandaids", "Body lotion", "Conditioner", "Contact lens solution", "Cotton pads", "Cotton swabs", "Dental floss", "Deodorant",
	"Diapers", "Face cream", "Facial tissues", "Hair gel", "Hair spray", "Hand cream", "Insect Repellent", "Lip balm", "Makeup remover",
	"Mouthwash", "Nail polish", "Nail polish remover","Pads", "Pain reliever","Razor", "Razor blades", "Shampoo", "Shaving cream",
	"Soap", "Sunblock", "Tampons", "Tissues", "Toilet paper", "Toothbrush", "Toothpaste", "Vitamins", "Wet wipes", "Bird food", "Cat food", "Cat litter", "Cat treats", "Dog food", "Dog treats", "Fish food",
    "Bolts", "Brush", "Charcoal", "Fertilizer", "Garden tool", "Grill", "Lawnmower", "Nails", "Parasol", "Plants", "Pots",
	"Potting soil", "Propane", "Seeds", "Watering can"]; // Array with all possible items
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

