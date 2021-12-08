var completedButton = document.getElementsByTagName('button')[0];
var pendingButton = document.getElementsByTagName('button')[1];
var toDolist = document.getElementsByClassName('todos')[0];





fetch("https://jsonplaceholder.typicode.com/todos", {
        "method": "GET"
    })
    .then(response => {
        return response.json();
    })
    .then(res => {
        const data = res;
        console.log(data);
        let completed_arr = [];
        let pending_arr = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i]["completed"] == true) {
                completed_arr.push(data[i]);
            } else {
                pending_arr.push(data[i]);
            }
        }

        completedButton.addEventListener('click', () => {
            let count = 0;
            var html = "<table border='1'>";
            html += "<tr><th style=background-color:aqua>Sr.No.</th><th style=background-color:aqua>UserId</th><th style=background-color:aqua>id</th><th style=background-color:aqua>title</th><th style=background-color:aqua>completed</th></tr>";
            for (var i = 0; i < completed_arr.length; i++) {
                count++;
                html += "<tr>";
                html += "<td style=background-color:yellow>" + count + "</td>";
                html += "<td style=background-color:yellow>" + completed_arr[i].userId + "</td>";
                html += "<td style=background-color:yellow>" + completed_arr[i].id + "</td>";
                html += "<td style=background-color:yellow>" + completed_arr[i].title + "</td>";
                html += "<td style=background-color:green>" + completed_arr[i].completed + "</td>";
                html += "</tr>";
            }

            html += "</table>";
            toDolist.innerHTML = html;
        })

        pendingButton.addEventListener('click', () => {
            let count = 0;
            var html = "<table border='1'>";
            html += "<tr><th style=background-color:aqua>Sr.No.</th><th style=background-color:aqua>UserId</th><th style=background-color:aqua>id</th><th style=background-color:aqua>title</th><th style=background-color:aqua>completed</th></tr>";
            for (var i = 0; i < pending_arr.length; i++) {
                count++;
                html += "<tr>";
                html += "<td style=background-color:yellow>" + count + "</td>";
                html += "<td style=background-color:yellow>" + pending_arr[i].userId + "</td>";
                html += "<td style=background-color:yellow>" + pending_arr[i].id + "</td>";
                html += "<td style=background-color:yellow>" + pending_arr[i].title + "</td>";
                html += "<td style=background-color:red>" + pending_arr[i].completed + "</td>";
                html += "</tr>";
            }

            html += "</table>";
            toDolist.innerHTML = html;
        })

    })
    .catch(err => {
        console.error(err);
    })