const button = document.getElementById('myButton');
const message = document.getElementById('message');

button.addEventListener('mouseover', function(){
    message.textContent = 'Mouse is Over the Button!';
});

button.addEventListener('mouseout', function(){
    message.textContent = '';
});