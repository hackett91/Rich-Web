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

const addListElement = (e) => {
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
const removeParent = e => {
    if(confirm('Are you sure you would like to delete this note?')){
      e.target.parentElement.remove();
    }
}

// event listeners for adding note
const red = document.getElementById('red')
const redClicks =  Rx.Observable.fromEvent(red, 'click');
const blue = document.getElementById('blue')
const blueClicks =  Rx.Observable.fromEvent(blue,'click');
const green = document.getElementById('green')
const greenClicks =  Rx.Observable.fromEvent(green, 'click');

redClicks.subscribe(
  ev =>  addListElement(ev),
  error => { /* handle error condition */ },
  () =>    { /* no more data on this stream */ }
);
blueClicks.subscribe(
  ev => addListElement(ev),
  error => { /* handle error condition */ },
  () =>    { /* no more data on this stream */ }
);
greenClicks.subscribe(
  ev => addListElement(ev),
  error => { /* handle error condition */ },
  () =>    { /* no more data on this stream */ }
);
