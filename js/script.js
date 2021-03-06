/**
 * Treehouse FSJS Techdegree
 * Project 5 - Public Api Request
 * script.js
 */


//api url
const userUrl = "https://randomuser.me/api/?results=12&nat=us";

//grab needed DOM elements
const searchDiv = document.querySelector(".search-container");
const galleryDiv = document.querySelector("#gallery");
const body = document.querySelector("body");

//search handler variables
let users = [];
const searchError = document.createElement("h1");
searchError.style.display = "none";
galleryDiv.append(searchError);
searchError.innerText = "Sorry, there are no employees that match your search.";


/**
 * Create search field
 * Event listener for input
 * Funtion to dynamically alter display 
 */
searchDiv.innerHTML = `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
`;

searchDiv.addEventListener("keyup", () => {
  searchField(
    document.querySelector("#search-input"),
    document.querySelectorAll(".card-name")
  );
});

function searchField(input, searchList) {
  let results = [];
  searchList.forEach(user => {
    user.parentNode.parentNode.style.display = "none";
    if (user.textContent.toLowerCase().includes(input.value.toLowerCase())) {
      user.parentNode.parentNode.style.display = "";
      results.push(user);
    }
  });
  if (input !== "" && results.length === 0) {
    searchError.style.display = "";
  } else {
    searchError.style.display = "none";
  }
}

/**
 * Main app functions and logic
 * Will initialize with getUser()
 * getUser() will run asynch through remainder of the funcions
 */

//initialize app
getUser(userUrl);

/**
 * Calls random user api
 * passes data to JSON
 * creates a reff array
 * then calls generateHTML()
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
 * Initially creates main gallery
 * Then hidden modal displays
 * Followed by event handlers for navigation
 */
function generateHTML() {
  users.map(user => {
    const cardDiv = document.createElement("div");
    const modalDiv = document.createElement("div");
    const script = document.querySelector("script");

    cardDiv.className = "card";
    modalDiv.className = "modal-container";
    galleryDiv.append(cardDiv);
    body.insertBefore(modalDiv, script);
    modalDiv.style.display = "none";
    
    //main gallery html
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

    //modal html
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
          <p class="modal-text">Birthday: ${user.dob.date.substring(5, 7)}-${user.dob.date.substring(8, 10)}-${user.dob.date.substring(0, 4)}</p>
        </div>
      </div> 
      <div class="modal-btn-container">
        <button type="button" id="${user.name.first}-${user.name.last}-modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="${user.name.first}-${user.name.last}-modal-next" class="modal-next btn">Next</button>
      </div>
    `;

    /**
     * Modal click handlers and variables.
     */
    const nextBtn = document.querySelector(`#${user.name.first}-${user.name.last}-modal-next`);
    const prevBtn = document.querySelector(`#${user.name.first}-${user.name.last}-modal-prev`);
    const closeBtn = document.querySelector(`#${user.name.first}-${user.name.last}-modal-close-btn`);

    cardDiv.addEventListener("click", () => {
      modalDiv.style.display = "";
    });

    closeBtn.addEventListener("click", () => {
        modalDiv.style.display = "none";
      });

    nextBtn.addEventListener("click", () => {
      modalDiv.style.display = "none";
      modalDiv.nextElementSibling.style.display = "";
    });

    prevBtn.addEventListener("click", () => {
      modalDiv.style.display = "none";
      modalDiv.previousElementSibling.style.display = "";
    });
  });
}
