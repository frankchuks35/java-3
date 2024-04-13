

let buttonList = [];
let newItems;


document.addEventListener("DOMContentLoaded", () => {
    // onload

        document.getElementById('display').innerHTML = displayItems(groceryItems);

        //Fixed the condition in the loop to populate buttonList
        for (let i = 0; i < groceryItems.length; i++) {
            if (!buttonList.includes(groceryItems[i].category)) {
                buttonList.push(groceryItems[i].category);
            }
        }

        let buttons = buttonList.map(button => {
            return `<button class="filter-btn me-2" data-id=${button}>${button}</button>`;
        }).join('');

        const buttonArea = document.querySelector(".button-area");
        buttonArea.innerHTML = `<button id="all" class="filter-btn me-2">All</button>${buttons}`;

        const catBtn = document.querySelectorAll('.filter-btn');
        console.log(catBtn)

        catBtn.forEach(btn => {
            btn.addEventListener('click', () => {

                newItems = groceryItems.filter(item => item.category === btn.dataset.id);
                console.log(newItems);
                
                document.getElementById('display').innerHTML = displayItems(newItems);
            });
        });

        document.getElementById('all').addEventListener('click', ()=>{
            document.getElementById('display').innerHTML = displayItems(groceryItems);
        })


        //DISPLAY ON SCREEN
        function displayItems(items){
         return   items.map(value => {
                return `<div class="col-md-6 img-check d-flex">
                <div class="row mb-4">
                    <div class="col-md-4">
                        <img src="${value.image}" alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="write-up d-flex">
                            <h4 class="first-h4">${value.name}</h4>
                            <h4 class="color-shade">$${value.price}</h4>
                        </div>
                        <div class="StyleFor-P">
                            <p class="mt-3">${value.description}
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
                        `;
            }).join('');
        }
}) 

