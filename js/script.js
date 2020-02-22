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
 * Create and append gallery HTML
 */
const galleryDiv = document.querySelector("#gallery");

galleryDiv.innerHTML = `
    <div class="card">
        <div class="card-img-container">
            <img class="card-img" src="https://placehold.it/90x1; alt="profile picture">
        </div> 
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">first last</h3>
            <p class="card-text">email</p>
            <p class="card-text cap">city, state</p>
        </div>
    </div>
`;

/**
 * Create and append modal container to DOM
 */
const bodyElement = document.querySelector("body");
let modalContainer = document.createElement("div");
modalContainer.className = "modal-container";
modalContainer.innerHTML = `
    <div class="modal">
        <button type="button" id="modal-close-btn" class="moda-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
            <h3 id="name" class="modal-name cap">name</h3>
            <p class="modal-text">email</p>
            <p class="modal-text cap">city</p>
            <hr>
            <p class="modal-text">(555) 555-5555</p>
            <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
            <p class="modal-text">Birthday: 10/21/2015</p>
    </div>
`;

bodyElement.append(modalContainer);
