const postWordCount = (e) => {
  e.preventDefault();
  fetch("https://my-json-server.typicode.com/hackett91/json/posts")
  .then((response) => {
     if (response.ok) {
         response.json()
         .then(posts => {
            var post = posts.filter(postWordCountAboveSix);
            console.log('Array post object with titles more than six words')
            console.log(post);
            posts.map(post => {
                console.log("New Post Count");
                var frequency = wordFreqency(post.title);
                Object.keys(frequency).forEach((word) => {
                  console.log("Frequency of " + word + " is: " + frequency[word]);
                });
            });
          });
     }
   }).catch((error) => {
     console.log('Error: ' + error.message);
   });
}

const postWordCountAboveSix = (post) => {
  return post.title.split(" ").length > 6 ;
}

document.getElementById('button').addEventListener('click', postWordCount);

// inspiration taking from https://stackoverflow.com/questions/30906807/word-frequency-in-javascript
const wordFreqency = (string) => {
	return string.replace(/[.]/g, '')
  	.split(/\s/)
    .reduce((map, word) =>
    	Object.assign(map, { [word]: (map[word]) ? map[word] + 1 : 1,}),
    	{}
    );
}
