var form = document.querySelector('form');
form.addEventListener('submit', insertEvent);

function insertEvent (event) {
    event.preventDefault();
    addListElement(readFormInput('fullName'));
}

function readFormInput (data) {
    var inputData = {};
    inputData[data] = document.getElementById(data).value;
    return inputData;
}

function addListElement (data) {
    var liNode = document.createElement("li");
    var textNode = document.createTextNode(data.fullName);
    liNode.appendChild(textNode);
    liNode.setAttribute("id", "card");
    document.getElementById("nameList").appendChild(liNode);
}
