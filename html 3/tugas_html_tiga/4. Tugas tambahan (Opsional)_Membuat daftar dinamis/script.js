const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', function(){
    const newItemText = inputField.value;

    if (newItemText.trim() === ""){
        alert("MASUKKAN TEKS UNTUK ITEM BARU!");
        return;
    }

    const newItem = document.createElement('li');
    newItem.textContent = newItemText;

    itemList.appendChild(newItem);

    inputField.value = "";
});