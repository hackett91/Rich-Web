// event listeners for adding note
document.getElementById('red').addEventListener('click',addListElement);
document.getElementById('blue').addEventListener('click', addListElement);
document.getElementById('green').addEventListener('click', addListElement);

// createElements with ids and returning
const createElement = element => idName => {
  const elementType = document.createElement(element);
  elementType.setAttribute('id', idName);
  return elementType;
}

// Create element
const divElement = createElement('div');
const textAreaElement = createElement('textarea');
const deleteButtonElement = createElement('button');

function addListElement (e) {
    e.preventDefault();
    //assigining ids
    const div = divElement('divNote');
    const deleteButton = deleteButtonElement('deleteNote');
    const textArea = textAreaElement('textNote')
    //adding extra attributes
    textArea.style.background = e.target.value;
    deleteButton.innerHTML = 'X';
    deleteButton.setAttribute('onclick', 'removeParent(event)')
    //inserting inside div
    div.appendChild(deleteButton);
    div.appendChild(textArea);
    //appeding to body
    document.getElementById("notes").appendChild(div);
}

//removing deleteButton and text area parent i.e Div
function removeParent(e){
    if(confirm('Are you sure you would like to delete this note?')){
      e.target.parentElement.remove();
    }
}
