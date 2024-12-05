const form = document.getElementById('myForm');
const nameField = document.getElementById('nameField');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event){
    if (nameField.value.trim() === '') {
        errorMessage.textContent = 'Name Field cannot be Empty!';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
        alert(`Form submitted with name: ${nameField.value}`);
    }
});