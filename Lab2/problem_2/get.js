
const apiCall = () => {
  fetch("https://my-json-server.typicode.com/hackett91/json/posts")
  .then((response) => {
     if (response.ok) {
         response.json().then(function(posts) {
         posts.map( post => {
            if(post.title.split(" ").length > 6){
             console.log(post.title);
           }
         });
       });
     }
   }).catch((error) => {
     console.log('Error: ' + error.message);
   });
}

document.getElementById('button').addEventListener('click', apiCall);
