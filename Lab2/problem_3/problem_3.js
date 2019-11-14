const form = document.querySelector('form');
const profileInfo = document.getElementById('profileInfo');
const repoList = document.getElementById('repoList');

const getGitHubUserEvent = (event) => {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var url = 'https://api.github.com/users/';
  if(username === ""){
    alert("Enter Username Please!");
  }else{
    fetch(url.concat(username))
    .then(response => response.json())
    .then((userInfo) =>   profileInfo.innerHTML = getUserInfo(userInfo))
    .catch((err) => {
      console.log(err + "fetch failed for Github User");
      alert("Invalid username or check internet connection")
    });

    fetch(url.concat(username).concat('/repos'))
    .then(response => response.json())
    .then((userRepos) => repoList.innerHTML = getUserRepos(userRepos))
    .catch((err) => {
      console.log(err + "fetch failed for Github Repos");
    });
  }
}

const getUserInfo = (userInfo) => {
  const userProfile = `<li><img src="${userInfo.avatar_url}" ></li>
                      <li class="profileInfoList"><strong>Name:</strong> ${userInfo.name}</li>
                      <li class="profileInfoList"><strong>Username:</strong> ${userInfo.login}</li>
                      <li class="profileInfoList"><strong>Email:</strong> ${userInfo.email}</li>
                      <li class="profileInfoList"><strong>Location:</strong> ${userInfo.location}</li>
                      <li class="profileInfoList"><strong>Number of Gist:</strong> ${userInfo.location}</li>`
  return userProfile;
}
const getUserRepos = (userRepos) => {
  const userRepositories =  userRepos.map((userRepo) =>
                        `<li id="repoListItem"><strong>Name:</strong> ${userRepo.name} <br><br>
                        <strong>Description:</strong> ${userRepo.description}</li>`).join("\n");
  return userRepositories;
}

form.addEventListener('submit', getGitHubUserEvent);
