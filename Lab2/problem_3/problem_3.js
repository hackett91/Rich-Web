const form = document.querySelector('form');

const profileInfo = document.getElementById('profileInfo');
const repoList = document.getElementById('repoList');

const insertEvent = (e) => {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var url = 'https://api.github.com/users/';
  // console.log(url.concat(username))

  fetch(url.concat(username))
  .then(response => response.json())
  .then((userInfo) => {
                        profileInfo.innerHTML = getUserInfo(userInfo)
                        return userInfo.repos_url;
                    }).then(userRepo  => {
                                          fetch(userRepo)
                                          .then(response => response.json())
                                          .then((userRepos) => repoList.innerHTML = getUserRepos(userRepos))});


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
        // console.log(userRepos);
        // console.log(userRepos);
  const userRepositories =  userRepos.map((userRepo) =>
                        `<li id="repoListItem"><strong>Name:</strong> ${userRepo.name} <br><br>
                        <strong>Description:</strong> ${userRepo.description}</li>`).join("\n");
  return userRepositories;
}



form.addEventListener('submit', insertEvent);
