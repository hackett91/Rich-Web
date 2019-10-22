// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// console.log(fetchPromise);

// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   console.log(response);
// });

// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   console.log(people);
// });
//
// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// // Target main element
// const main = document.getElementById("main");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   const names = people.map(person => person.name).join("\n");
//   // Append names to main element
//   main.innerHTML = names;
// });
// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// const main = document.getElementById("main");
//
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   main.innerHTML = listOfNames(people);
// });
// function listOfNames(people) {
//   const names = people.map(person => `<li>${person.name}</li>`).join("\n");
//   return `<ul>${names}</ul>`
// }
//
// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// const main = document.getElementById("main");
// // Loading Placeholder
// main.innerHTML = "<p>Loading...";
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   main.innerHTML = listOfNames(people);
// });
// function listOfNames(people) {
//   const names = people.map(person => `<li>${person.name}</li>`).join("\n");
//   return `<ul>${names}</ul>`
// }



const URL = "https://ghibliapi.herokuapp.com/people";
const main = document.getElementById("main");
main.innerHTML = "<p>Loading...";
fetch(URL)
  .then((response) => response.json())
  .then((people) => main.innerHTML = getListOfNames(people));
const getListOfNames = (people) => {
  const names = people
    .map((person) => `<li>${person.name}</li>`)
    .join("\n");
return `<ul>${names}</ul>`;
};
