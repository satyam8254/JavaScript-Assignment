var input = document.getElementsByTagName('input')[0];
var button = document.getElementsByTagName('button')[0];
var toDolist = document.getElementsByClassName('todos')[0];
var keyCount = 0
button.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.setAttribute("key", keyCount)
    keyCount = keyCount + 1
    paragraph.innerHTML = input.value



    toDolist.appendChild(paragraph)
    paragraph.addEventListener('click', function() {
        toDolist.removeChild(paragraph)
    })
});


// var data = document.getElementsByClassName('api');
// data.addEventListener('click', function() {
//     var dataList = document.createElement('p');


// })


fetch("https://jsonplaceholder.typicode.com/todos", {
        "method": "GET"
    })
    .then(response => {
        return response.json();
    })
    .then(res => console.log(res))
    .catch(err => {
        console.error(err);
    })