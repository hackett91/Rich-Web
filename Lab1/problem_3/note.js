document.getElementById('red').addEventListener('click',addListElement);
document.getElementById('blue').addEventListener('click', addListElement);
document.getElementById('green').addEventListener('click', addListElement);

function addListElement (e) {
    e.preventDefault();
    var div = document.createElement('div');
    var textArea = document.createElement("textarea");
    var button = document.createElement("button");
    div.setAttribute('id', 'textDiv');
    textArea.style.background = e.target.value;
    textArea.setAttribute("id", "card");
    button.innerHTML = 'X';
    button.setAttribute("id", "deleteButton");
    button.setAttribute('onclick', 'removeParent(event)')
    div.appendChild(button);
    div.appendChild(textArea);
    document.getElementById("notes").appendChild(div);
}

function removeParent(e){

    e.target.parentElement.remove();
}
