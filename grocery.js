const userInput = document.getElementById("grocery");
const addGroceryBtn = document.getElementById("submit-btn");
const groceryList = document.getElementById("grocery-list");
const alert = document.getElementById('alert');
const clearBtn = document.querySelector(".clear-btn"); // Select the clear button
let groceries = [];
let editIndex = -1;

// Function to render the grocery list
const renderGrocery = (g) => {
    // Clear the grocery list
    groceryList.innerHTML = "";
    
    // Render each grocery item
    g.forEach((value, index) => {
        const groceryItem = document.createElement('article');
        groceryItem.classList.add('grocery-item');
        groceryItem.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button id="edit-btn" onclick="editItem(${index})">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>   
                <button class="delete-btn" onclick="deleteItem(${index})">
                    <i class="fa-solid fa-trash-can"></i>
                </button> 
            </div>`;
        
        // Append the grocery item to the grocery list
        groceryList.appendChild(groceryItem);
    });


    // Show or hide the clear button based on the number of items in the grocery list
    // clearBtn.style.visibility = g.length > 0 ? "visible" : "hidden";

    if(g.length === 0){
        clearBtn.style.visibility = "hidden"
    }else {
        clearBtn.style.visibility = "visible"
    }
}

// Check local storage for saved data
const savedData = JSON.parse(localStorage.getItem('groceryList'));
if (savedData) {
    groceries = savedData;
    renderGrocery(groceries);
}

// Add event listener for the "Add Grocery" button
addGroceryBtn.addEventListener('click', () => {
    // Check for valid inputs
    if (userInput.value === '' || !isNaN(userInput.value)) {
        alert.innerHTML = `<div class="alert alert-danger d-flex align-items-center" role="alert">
            <div>
                Invalid Input, please try again!
            </div>
        </div>`;
        setTimeout(() => {
            alert.innerHTML = "";
        }, 7000);
        return;
    }

    // Check if it was an edit or a new addition
    if (editIndex !== -1) {
        groceries[editIndex] = userInput.value;
        editIndex = -1;
    } else {
        groceries.push(userInput.value);
    }
    
    userInput.value = "";
    renderGrocery(groceries);

    // Save data to local storage
    localStorage.setItem('groceryList', JSON.stringify(groceries));
});


clearBtn.addEventListener("click", () => {
    clear(groceries);
    renderGrocery(groceries);
    localStorage.setItem('groceryList', JSON.stringify(groceries));
})



// Function to delete a grocery item
const deleteItem = (index) => {
    groceries.splice(index, 1);
    renderGrocery(groceries);

    // Update local storage after deletion
    localStorage.setItem('groceryList', JSON.stringify(groceries));
};

// Function to edit a grocery item
const editItem = (index) => {
    editIndex = index;
    userInput.value = groceries[index];
};


const clear = (gItems) => {
    return gItems.length = 0
}

