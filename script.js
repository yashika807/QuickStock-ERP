let inventory = []; // keeping all the stuff here

function addProduct() {
    const name = document.getElementById('productName').value.trim(); // get the name from the box
    const quantity = parseInt(document.getElementById('productQuantity').value.trim()); // get the number

    if (!name || isNaN(quantity) || quantity <= 0) {
        alert('Please enter valid product details.'); // just reminding if something's missing
        return;
    }

    inventory.push({ name, quantity }); // adding the new item to my list
    updateInventoryDisplay(); // show the new list

    document.getElementById('productName').value = ''; // clear the name box
    document.getElementById('productQuantity').value = ''; // clear the number box
}

function updateInventoryDisplay() {
    const inventoryList = document.getElementById('inventory'); // where I show the list
    inventoryList.innerHTML = ''; // clear old stuff

    inventory.forEach(item => {
        const li = document.createElement('li'); // make a new list item
        li.textContent = `${item.name} — ${item.quantity} pcs`; // write the name and how many
        inventoryList.appendChild(li); // add it to the list
    });
}
