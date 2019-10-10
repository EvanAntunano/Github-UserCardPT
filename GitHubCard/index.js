/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/EvanAntunano')
.then(response => {
  console.log(response);
  const newCard = cardMaker(response.data)
  cards.appendChild(newCard);
})
.catch((err) => {
  console.log(err);
})



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  'vishalicious213',
  'kmcknight1',
  'Justin-Kane',
  'tonyrkovar',
  'johngwells'
];

followersArray.forEach(i => {
  axios.get('https://api.github.com/users/' + [i])
  .then((response) => {
    const newCard = cardMaker(response.data)
    cards.appendChild(newCard)
  })
  .catch( (err) => {
    console.log(err)
  })
})
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cards = document.querySelector('.cards')

function cardMaker(arg){
  const cards = document.createElement('div');
  img = document.createElement('img');
  cardsInfo = document.createElement('div');
  nameh3 = document.createElement('h3');
  usernameP = document.createElement('p');
  usernameL = document.createElement('p');
  profile = document.createElement('p');
  profileURL = document.createElement('a');
  followers = document.createElement('p');
  following = document.createElement('p');
  bio = document.createElement('p');



  //add class names
  cards.classList.add('card');
  cardsInfo.classList.add('card-info');
  nameh3.classList.add('name');
  usernameP.classList.add('username');



  //append 
  cards.appendChild(img);
  cards.appendChild(cardsInfo);
  cardsInfo.appendChild(nameh3);
  cardsInfo.appendChild(usernameP);
  cardsInfo.appendChild(usernameL);
  cardsInfo.appendChild(profile);
  cardsInfo.appendChild(profileURL);
  cardsInfo.appendChild(followers);
  cardsInfo.appendChild(following);
  cardsInfo.appendChild(bio);

  //set text content and sources
  img.src = `${arg.avatar_url}`;
  nameh3.textContent = `${arg.login}`;
  usernameP.textContent = `${arg.login}`;
  usernameL.textContent = `${arg.location}`;
  profileURL.textContent = `${arg.html_url}`;
  followers.textContent = `${arg.followers}`;
  following.textContent = `${arg.following}`;
  bio.textContent = `${arg.bio}`;

  return cards;
}
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
