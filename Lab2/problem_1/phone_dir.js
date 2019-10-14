function sortAsDes(event){

  var tableRows = document.getElementsByClassName('tableRow');

  

  console.log(tableRows);
}

function readFormData(){
  const formData = document.getElementById("myForm").children;
  validateForm(formData);
}

function extractDetails(formData) {
  const formDetails =
              {  UserName: formData.name.value,
                  MobileNumber: formData.phone.value,
                  Email: formData.email.value };
  return formDetails;
}

function validateForm(formData){
  const formDetails = extractDetails(formData);
  var errorMessages = validateInputs(formDetails);
  if(!errorMessages.length){
      var table = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
      var tableRow = table.insertRow(table.length);
      tableRow.setAttribute('class','tableRow');
      Object.values(formDetails).forEach(function(value) {
          let cell = tableRow.insertCell();
          cell.appendChild(document.createTextNode(value));
      });
  }else{
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'error');
    divElement.innerHTML = errorMessages;
    document.getElementById("bodyId").appendChild(divElement);
  }
}

// inspiration taking from https://medium.com/javascript-inside/effective-data-validation-in-javascript-5c2f3e75249e
const validateDetails = (validation, errorMsg) =>
data => validation(data) ? data : errorMsg;

// validate the username
const validateMobileNumber = validateDetails(
  data => data && data.length == 10 && data.match(/^\d*$/),
  "Should contain only Numbers" +
  " Should be equal to 10 characters in length."
);

// validate the username
const validateUserName = validateDetails(
  data => data && data.length < 20 && data.match(/^[a-z\s]*$/),
  "Should contain only Alphabets and Space." +
  " Should be less than or equal to 20 characters in length."
);

// validate the username
const validateEmail = validateDetails(
                                    // sourced from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  data => data && data.length < 40 && data.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
  "Should have a proper validation and should be less than 40 characters in length"
);

const validateInputs = formDetails => {
      var errorMessages = [];
      Object.entries(formDetails).forEach(function([key,value]) {
        var validateType = eval(`validate${key}`);
        var returnValue = validateType(value);
        if(returnValue !=  value){
          errorMessages.push(returnValue);
        }
      });
      return errorMessages;
}
