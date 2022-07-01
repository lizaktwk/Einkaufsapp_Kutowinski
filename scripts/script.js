
// Suche nach einem bestimmten Produkt, das man gerne zur Liste hinzufügen würde
new Script();
console.log("started")
function Script() {
    let list = ["Apples", "Apricot", "Artichokes", "Arugula", "Asparagus", "Avocado", "Bananas", "Basil", "Beets",
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
	"Potting soil", "Propane", "Seeds", "Watering can"];
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
        console.log("adding " + item + " to list...");
    }


}
 


// const addBox = document.querySelector(".add-box");
// const popupBox = document.querySelector(".popup-box");
// const popupTitle = popupBox.querySelector("header p");
// const closeIcon = popupBox.querySelector("header i");
// const titleTag = popupBox.querySelector("input");
// const descTag = popupBox.querySelector("textarea");
// const addBtn = popupBox.querySelector("button");

// const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];


// // getting localstorage notes if exist and parsing them to js object
// // else passing an empty array to notes
// const notes = JSON.parse(localStorage.getItem("notes") || "[]");
// let isUpdate = false, updateId;

// addBox.addEventListener("click", () => {
//     titleTag.focus();
//     popupBox.classList.add("show");
// });

// closeIcon.addEventListener("click", () => {
//     isUpdate = false;
//     titleTag.value = "";
//     descTag.value ="";
//     addBtn.innerText = "Add a Note";
//     popupTitle.innerText = "Add a new Note";
//     popupBox.classList.remove("show");
// });

// function showNotes() {
//     document.querySelectorAll(".note").forEach(note => note.remove());
//     notes.forEach((note, index) => {
//         let liTag = '<li class="note"> <div class = "details"> <p>${note.title}</p><span>${note.description}</span></div><div class="bottom-content"><span>${note.date}</span><div class="settings"><i onclick = "showMenu(this)" class="uil uil-ellipsis-h"></i><ul class="menu"><li onclick = "updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edit</li><li onclick = "deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li></ul></div></div></li > ';

//             // < div class="details" >
//             //     <p>${note.title}</p>
//             //     <span>${note.description}</span>
//             // </div >
//             // <div class="bottom-content">
//             //     <span>${note.date}</span>
//             //     <div class="settings">
//             //         <i onclick = "showMenu(this)" class="uil uil-ellipsis-h"></i>
//             //         <ul class="menu">
//             //             <li onclick = "updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen"></i>Edit</li>
//             //             <li onclick = "deleteNote(${index})"><i class="uil uil-trash"></i>Delete</li>
//             //         </ul>
//             //     </div>
//             // </div>
//             // </li > ';

//             addBox.insertAdjacentHTML("afterend", liTag);


//     });
// }

// showNotes();

// function showMenu(elem) {
//     elem.parentElement.classList.add("show");
//     document.addEventListener("click", e => {
//         //removing show class from the settings menu on document click
//         if(e.target.tagName != "I" || e.target != elem) {
//             elem.parentElement.classList.remove("show");
//         }
//     });
// }

// function deleteNote(noteId) {
//     let confirmDel = confirm("Liste entfernen?");
//     if(!confirmDel) return;
//     notes.splice(noteId, 1); //removing selected note from array/tasks
//     //saving updated notes to localStorage
//     localStorage.setItem("notes", JSON.stringify(notes));
//     showNotes();
// }

// function updateNote(noteId, title, desc) {
//     isUpdate = true;
//     updateId = noteId;
//     addBox.click();
//     titleTag.value = title;
//     descTag.value = desc;
//     addBtn.innerText = "Update Note";
//     popupTitle.innerText = "Update a Note";
//     console.log(noteId, title, desc);

// }

// addBtn.addEventListener("click", e => {
//     e.preventDefault();
//     let noteTitle = titleTag.value;
//     let noteDesc = descTag.value;

//     if (noteTitle || noteDesc) {
//         //getting current date
//         let dateObj = new Date();
//         let month = months[dateObj.getMonth()];
//         let day = dateObj.getDate();
//         let year = dateObj.getFullYear();

//         let noteInfo = {
//             title: noteTitle, description: noteDesc,
//             date: '${month} ${day}, ${year}'
//         }
//         if(!isUpdate) {
//             notes.push(noteInfo); // adding new note to notes
//         } else {
//             isUpdate = false;
//             notes[updateId] = noteInfo; // updating specified note
//         }
        
//         // saving notes to localStorage
//         localStorage.setItem("notes", JSON.stringify(notes));
//         closeIcon.click();
//         showNotes();
//     }
// });







//Akkordeon bei obst.html --> also alle Auflistungen der Produkte in den Unterseiten der Kategorien
  // let accord = document.getElementsByClassName("accordion");
  // let j;

  //    for (j = 0; j < accord.length; j++) {
  //   accord[j].addEventListener("click", function() {
  //     /* Toggle between adding and removing the "active" class,
  //     to highlight the button that controls the panel */
  //     this.classList.toggle("active");

  //     /* Toggle between hiding and showing the active panel */
  //     let panel = this.nextElementSibling;
  //     if (panel.style.display === "block") {
  //       panel.style.display = "none";
  //     } else {
  //       panel.style.display = "block";
  //     }
  //   });
  // }

  // function kategorie() {
  //      if (document.getElementById("aufklappbar").style.display == "none") {
  //        document.getElementById("aufklappbar").style.display = "block";       } else {
  //        document.getElementById("aufklappbar").style.display = "none";
  //      }
  //   }


