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



