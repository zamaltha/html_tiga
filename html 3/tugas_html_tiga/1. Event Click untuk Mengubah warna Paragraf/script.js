const button = document.getElementById('changeText');
const text = document.getElementById('text');

button.addEventListener('click', function(){
    text.textContent = 'Hello, World';
    text.style.color = 'blue';
});