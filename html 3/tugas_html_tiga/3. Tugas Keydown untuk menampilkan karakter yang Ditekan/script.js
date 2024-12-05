const inputField = document.getElementById('inputField');
const output = document.getElementById('output');

inputField.addEventListener('keydown', function(event){
    output.textContent = event.key;
});