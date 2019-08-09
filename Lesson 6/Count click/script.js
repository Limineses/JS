var button = document.getElementById('button');
var count = 0;

button.addEventListener('click', function(){
    count++;
    button.innerHTML = count;
})