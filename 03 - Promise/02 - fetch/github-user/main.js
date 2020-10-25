// Your code goes here
let userInput = document.querySelector('#userInput')
let profile = document.querySelector('.profile-section');
 
function fetchUser(userInput){
    return fetch(`https://api.github.com/users/${userInput}`).then(data => data.json());
}

function fetchFollower(userInput){
    return fetch(`https://api.github.com/users/${userInput}/followers`).then(data => data.json());
 }

 
 function fetchRepos(userInput){
    return fetch(`https://api.github.com/users/${userInput}/repos`).then(data => data.json());
 
 } 

function userUI(userData){
     /*
let url = `https://api.github.com/users/${userInput}`
let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onload = function(){
let userData = JSON.parse(xhr.response);
console.log(userData)
*/
profile.innerHTML = ''
let card = document.createElement('div');
card.setAttribute('class', 'row');
let cardBody = document.createElement('div');
cardBody.setAttribute('class', 'card-body col-md-8');
let imgContainer = document.createElement('div');
imgContainer.setAttribute('class', 'col-md-4')
 let cardImg = document.createElement('img');
 cardImg.setAttribute('class', ' card-img rounded');
cardImg.src = userData.avatar_url;
imgContainer.appendChild(cardImg)
 card.append(imgContainer, cardBody);
 let cardTitle = document.createElement('h2');
 cardTitle.setAttribute('class', 'card-title');
 cardTitle.innerHTML = `${userData.name} <span class = 'userName text-success'>@${userData.login} <span>`;
 let cardSubTitle = document.createElement('h5');
 cardSubTitle.setAttribute('class', 'card-subtile mb-2 text-muted');
cardSubTitle.innerText = userData.bio;
let company = document.createElement('h6');
company.innerHTML = `<span class = 'company icon'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-building" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694L1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
<path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
</svg></span>${userData.company || ''}`;
let location = document.createElement('h6');
location.innerHTML = `<span  class = 'location icon'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-house-door-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 10.995V14.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z"/>
<path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
</svg></span> ${userData.location || ''}`;
let counter = document.createElement('div');
counter.setAttribute('class', 'counter-section container');
let counterRow = document.createElement('div');
counterRow.setAttribute('class', 'row mt-4');
counter.append(counterRow);
let followers = document.createElement('div');
followers.setAttribute('class','col-md-4');
console.log(userData.followers)
followers.innerHTML = `<h4 class = 'ml-4'> ${userData.followers}</h4><h6>Followers</h6>`
let following = document.createElement('div');
following.setAttribute('class','col-md-4');
following.innerHTML = ` <h4 class = 'ml-4'> ${userData.following}</h4><h6>Following</h6>`
let repo = document.createElement('div');
repo.setAttribute('class','col-md-4');
repo.innerHTML = ` <h4 class = 'ml-4'> ${userData.public_repos}</h4><h6>Public Repos</h6>`
counterRow.append(followers, following, repo)
let profileLink = document.createElement('a');
profileLink.setAttribute('class', 'btn btn-primary mt-4');
profileLink.innerText = 'GitHub Profile'
profileLink.href = userData.html_url
cardBody.append( cardTitle,cardSubTitle,  company, location, counter ,profileLink);
profile.append(card);
let body = document.querySelector('body')
 let dataContainer = document.createElement('div');
dataContainer.setAttribute('class', 'container data-container')
let dataRow = document.createElement('div');
dataRow.setAttribute('class', 'row');
let repoCol = document.createElement('div');
repoCol.setAttribute('class', 'col-md-8 repo mt-5');
let followerCol = document.createElement('div');
followerCol.setAttribute('class', 'col-md-4 follower mt-4');
dataRow.append(repoCol, followerCol);
dataContainer.appendChild(dataRow);
body.append(dataContainer);
}
/*
console.log(xhr)
 xhr.onabort = function(){
    alert('Error')
};
xhr.send();
*/

function  followersUI(followers){
let folcon = document.querySelector('.follower');
    folcon.innerHTML = '';
let head = document.createElement('h2');
head.setAttribute('class', 'h2 text-muted mb-5 mt-2')
head.innerText = 'Followers';
folcon.appendChild(head);
  [...followers].slice(0, 5).map((follower) => {
  let  followerPro = document.createElement('div');
  followerPro.setAttribute('class', 'profile')
  let profileImage = document.createElement('img');
  profileImage.setAttribute('class', 'followerImg p-3 rounded');
  profileImage.src =  follower.avatar_url || '';
  let profileName = document.createElement('div');
  profileName.innerHTML = `<h6>${follower.login || ''}</h6>`;
  profileName.setAttribute('class', 'p-3')
  followerPro.append(profileImage, profileName)
  let hr = document.createElement('hr')
  folcon.append(followerPro, hr);
})
};
function reposUI(repos){
    let repoCon = document.querySelector('.repo');
    repoCon.innerHTML = '';
let head = document.createElement('h2');
head.setAttribute('class', 'h2 text-muted mb-5')
head.innerText = 'Repositories';
repoCon.appendChild(head);
    [...repos].slice(0, 5).map((repo) => {
        console.log(repo)
        let  repoContainer = document.createElement('div');
        repoContainer.setAttribute('class', 'repo p-3')
        let repoName = document.createElement('div');
        repoName.innerHTML = `<h5>${repo.name || ''}</h5>`;
        repoName.setAttribute('class', 'text-success');
        let repoDes = document.createElement('div');
        repoDes.innerHTML = `<p>${repo.description || ''}</p>`;
        repoDes.setAttribute('class', 'text-muted');
        let detail = document.createElement('div');
        detail.setAttribute('class', ' container detail');
        let detailRow = document.createElement('div');
        detailRow.setAttribute('class', ' row');
         let detailCol = document.createElement('div');
        detailCol.setAttribute('class', ' col-md-4');
        detailCol.innerHTML = `<h4> follower</h4>`
        detailCol.innerHTML = `<span class = 'p-2'>${repo.language || ''}</span> <span class = 'p-2'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
         </svg> </span>  <span>${repo.stargazers_count || 0}</span> <span><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17,6.06a3,3,0,0,0-1.15,5.77A2,2,0,0,1,14,13.06H10a3.91,3.91,0,0,0-2,.56V7.88a3,3,0,1,0-2,0v8.36a3,3,0,1,0,2.16.05A2,2,0,0,1,10,15.06h4a4,4,0,0,0,3.91-3.16A3,3,0,0,0,17,6.06Zm-10-2a1,1,0,1,1-1,1A1,1,0,0,1,7,4.06Zm0,16a1,1,0,1,1,1-1A1,1,0,0,1,7,20.06Zm10-10a1,1,0,1,1,1-1A1,1,0,0,1,17,10.06Z"/></svg></span> <span>${repo.forks_count || ''}</span>`;
        let blank = document.createElement('div');
        blank.setAttribute('class', 'col-md-4');
       // detailRow.append(detailCol, blank, detailDate);
        let detailDate = document.createElement('div');
        detailDate.setAttribute('class', 'col-md-4');
        detailDate.innerHTML = `<span class = 'text-muted'> Last Update ${repo.updated_at}</span>`
        detailRow.append(detailCol,  blank, detailDate);
        detail.appendChild(detailRow);
        repoContainer.append(repoName, repoDes, detail);
        let hr = document.createElement('hr')
        repoCon.append(repoContainer, hr);
    })
 }


userInput.addEventListener('keypress', (event) => {
     if(event.key === "Enter"){
      if(!userInput.value){
         alert('Please Enter Valid User Name')
     }else{
        fetchUser(userInput.value).then(userData => userUI(userData));
        fetchFollower(userInput.value).then((users) => followersUI(users));
        fetchRepos(userInput.value).then((repos) => reposUI(repos));
     }
    }
  });
  fetchUser('google').then(userData => userUI(userData));
        fetchFollower('google').then((users) => followersUI(users));
        fetchRepos('google').then((repos) => reposUI(repos));


