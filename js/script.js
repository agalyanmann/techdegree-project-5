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
  "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/";
const galleryDiv = document.querySelector("#gallery");

for (let i = 0; i < 12; i++) {
  generateUser(userUrl);
}

function generateUser(api) {
  fetch(api)
    .then(response => response.json())
    .then(data => data.results[0])
    .then(userInfo => generateGallery(userInfo));
}

function generateGallery(userInfo) {
  const cardDiv = createElement("div");
  const cardImageDiv = createElement("div");
  const cardInfoDiv = createElement("div");

  cardDiv.className = "card";
  cardImageDiv.className = "card-img-container";
  cardInfoDiv.className = "card-info-container";

  galleryDiv.append(cardDiv);
  cardDiv.append(cardImageDiv);
  cardDiv.append(cardInfoDiv);

  cardImageDiv.innerHTML = `
    <img class="card-img" src="${userInfo.picture.large}" alt="profile picture">
  `;
  cardInfoDiv.innerHTML = `
    <h3 id="name" class="card-name cap">${userInfo.name.first} ${userInfo.name.last}</h3>
    <p class="card-text">${userInfo.email}</p>
    <p class="card-text cap">${userInfo.location.city}, ${userInfo.location.state}</p>
  `;
}

function createElement(element) {
  const elementType = document.createElement(element);
  return elementType;
}
