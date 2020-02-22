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
 * App Logic
 */
const user = "https://randomuser.me/api/";

function getUser(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => data.results)
    .then(result => result[0])
    .then(userData => {
      return console.log(userData);
    });
}

getUser(user);
