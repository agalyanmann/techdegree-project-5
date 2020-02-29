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
  "https://randomuser.me/api/?results=12&nat=us";
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
  users.map(async (user) => {
    const cardDiv = document.createElement("div");
    const modalDiv = document.createElement("div");
    const script = document.querySelector("script");

    cardDiv.className = "card";
    modalDiv.className = "modal-container";
    galleryDiv.append(cardDiv);
    body.insertBefore(modalDiv, script);
    modalDiv.style.display = "none";

    cardDiv.innerHTML = `
      <div class="card-img-container">
        <img class="card-img" src="${user.picture.large}" alt="profile picture">
      </div>   
      <div class="card-info-container">
        <h3 id="${user.name.first}-${user.name.last}-gallery" class="card-name cap">${user.name.first} ${user.name.last}</h3>
        <p class="card-text">${user.email}</p>
        <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
      </div>
    `;

    modalDiv.innerHTML = `
      <div class="modal">
        <button type="button" id="${user.name.first}-${user.name.last}-modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
          <img class="modal-img" src="${user.picture.large}" alt="profile picture">
          <h3 id="${user.name.first}-${user.name.last}-modal" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
          <p class="modal-text">${user.email}</p>
          <p class="modal-text cap">${user.location.city}</p>
          <hr>
          <p class="modal-text>${user.cell}</p>
          <p class="modal-text">${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}</p>
          <p class="modal-text">Birthday: ${user.dob.date.substring(5, 7)}-${user.dob.date.substring(8, 10)}-${user.dob.date.substring(0, 4)}
          </p>
        </div>
      </div> 
    `;

    cardDiv.addEventListener("click", () => {
      modalDiv.style.display = "";
    });

    document
      .querySelector(`#${user.name.first}-${user.name.last}-modal-close-btn`)
      .addEventListener("click", () => {
        modalDiv.style.display = "none";
      });
  });
}
