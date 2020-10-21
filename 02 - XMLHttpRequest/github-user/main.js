// Your code goes here
let userIn = document.querySelector('#userInput')
let container = document.querySelector('.content');
let getUser = document.querySelector('#getUser');

function userDataFetch(userInput = 'shadab-me') {
   let url = `https://api.github.com/users/${userInput}`
   let xhr = new XMLHttpRequest();
   xhr.open('GET', url);
   xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      console.log(userData)
      container.innerHTML = ''
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      let cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      let cardImg = document.createElement('img');
      cardImg.setAttribute('class', 'card-img-top rounded');
      cardImg.src = userData.avatar_url;
      card.append(cardImg, cardBody);
      let cardTitle = document.createElement('h5');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerText = userData.login;
      let cardSubTitle = document.createElement('h5');
      cardSubTitle.setAttribute('class', 'card-subtile mb-2 text-muted');
      cardSubTitle.innerText = userData.bio;
      let profileLink = document.createElement('a');
      profileLink.setAttribute('class', 'btn btn-primary');
      profileLink.innerText = 'Git Hub Profile'
      profileLink.href = userData.url
      cardBody.append(cardTitle, cardSubTitle, profileLink);
      container.append(card);
   }

   console.log(xhr)
   xhr.onabort = function () {
      alert('Error')
   };
   xhr.send();
}

getUser.addEventListener('click', () => {
   if (!userIn.value) {
      alert('Please Enter Valid User Name')
   } else {
      userDataFetch(userIn.value)

   }
})