var input = document.getElementsByTagName('input')[0];
var button = document.getElementsByTagName('button')[0];
var toDolist = document.getElementsByClassName('todos')[0];

button.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = input.value
    toDolist.appendChild(paragraph)
});

p.addEventListener('click', function() {
    paragraph.remove()

})