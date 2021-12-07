var button = document.getElementsByTagName('button');
var toDolist = document.getElementsByClassName('todos')[0];



fetch("https://jsonplaceholder.typicode.com/todos", {
        "method": "GET"
    })
    .then(response => {
        return response.json();
    })
    .then(res => {
        const data = res.slice(0, 10);
        console.log(data);
        data.forEach((todo, index) => {
            const userId = document.createElement('p');
            const id = document.createElement('p');
            const title = document.createElement('p');
            const completed = document.createElement('p');
            userId.setAttribute('key', index);
            id.setAttribute('key', index);
            title.setAttribute('key', index);
            completed.setAttribute('key', index);
            userId.innerHTML = todo.userId
            id.innerHTML = todo.id
            title.innerHTML = todo.title
            completed.innerHTML = todo.completed
            toDolist.appendChild(userId)
            toDolist.appendChild(id)
            toDolist.appendChild(title)
            toDolist.appendChild(completed)
        })
    })
    .catch(err => {
        console.error(err);
    })

// button.addEventListener('click', function() {
//     toDolist.innerHTML = "";
//     data.filter(todo => todo.completed).forEach(todo, index) => {
//         const userId = document.createElement('p');
//         const id = document.createElement('p');
//         const title = document.createElement('p');
//         const completed = document.createElement('p');
//         userId.setAttribute('key', index);
//         id.setAttribute('key', index);
//         title.setAttribute('key', index);
//         completed.setAttribute('key', index);
//         userId.innerHTML = todo.userId
//         id.innerHTML = todo.id
//         title.innerHTML = todo.title
//         completed.innerHTML = todo.completed
//         toDolist.appendChild(userId)
//         toDolist.appendChild(id)
//         toDolist.appendChild(title)
//         toDolist.appendChild(completed)
//     }
// })