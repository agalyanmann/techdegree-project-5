/**
 * Create and append search input to DOM
 */
const searchDiv = document.querySelector(".search-container");

searchDiv.innerHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
`;

/**
 * MAIN GALLERY
 */

const userUrl =
  "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=12";
const galleryDiv = document.querySelector("#gallery");
const body = document.querySelector("body");
let users = [];

getUser(userUrl);

/**
 * Calls random user api
 */
function getUser(api) {
  fetch(api)
    .then(response => response.json())
    .then(data => data.results)
    .then(user => {
      users = [...user];
    })
    .then(generateHTML);
}

/**
 * Maps over users array to generate HTML
 */
function generateHTML() {
  users.map(user => {
    const cardDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const infoDiv = document.createElement("div");

    cardDiv.className = "card";
    imgDiv.className = "card-img-container";
    infoDiv.className = "card-info-conatiner";

    galleryDiv.append(cardDiv);
    cardDiv.append(imgDiv);
    cardDiv.append(infoDiv);

    imgDiv.innerHTML = `
    <img class="card-img" src="${user.picture.large}" alt="profile picture">
  `;

    infoDiv.innerHTML = `
    <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
    <p class="card-text">${user.email}</p>
    <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
  `;
  });
}
