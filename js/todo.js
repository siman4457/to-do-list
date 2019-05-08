// function get_todos(){
//     var todos = new Array();
//     var todos_str = localStorage.getItem('todo');
//     if(todos != null){
//         todos = JSON.parse(todos_str);
//     }
//     return todos;
// }
//
// function add(){
//     var task = document.getElementById('task').value;
//     var todos = get_todos();
//
//     todos.push(task);
//     localStorage.setItem('todo', JSON.stringify(todos));
//
//     show(); //update the list of TODOs displayed on the web page
//     return false; //to avoid any further actions generated by the 'click' event.
// }
//
// function remove(){
//     var id = this.getAttribute('id'); //The id of the current DOM object (the to-do list object) is the index in localStorage
//     var todos = get_todos();
//     todos.splice(id,1);
//     localStorage.setItem('todo', JSON.stringify(todos));
//     show();
//     return false;
// }
//
// function show(){
//     var todos = get_todos();
//     var html = '<ul>';
//
//     for(var i=0; i < todos.length; i++){
//         html += '<li>' + todos[i] + '<button class="remove button" id="' + i + '">x</button></li>';
//     }
//     html += '</ul>';
//
//     document.getElementById('todos').innerHTML = html;
//
//     var buttons = document.getElementsByClassName('remove');
//     for(var i=0; i<buttons.length; i++){
//         buttons[i].addEventListener('click', remove);
//     }
// }
//
// document.getElementById('add').addEventListener('click', add);
// show();



// Create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName("LI");
for(var i = 0; i< myNodeList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); //unicode for multiplication sign (will be used for close button)
    span.appendChild(txt);
    span.className = "close";
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for(var i=0; i < close.length; i++){
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click',toggleCheck, false);

function toggleCheck(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle("checked");
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    //Error checking
    if (inputValue === '') {
        alert("You must write a task!");
    } else {
        document.getElementById('myUL').appendChild(li);
    }

    //Clear Input
    document.getElementById('myInput').value = "";

    //Add close button to new task
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); //unicode for multiplication sign (will be used for close button)
    span.appendChild(txt);
    span.className = "close";
    li.appendChild(span);

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }
}