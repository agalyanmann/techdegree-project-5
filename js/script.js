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
const userUrl = "https://randomuser.me/api/";
const galleryDiv = document.querySelector('#gallery');

function generateUser(api) {
	fetch(api)
		.then(response => response.json())
		.then(data => data.results[0])
		.then(userInfo => generateGallery(userInfo));
}

function generateGallery(userInfo) {
	galleryDiv.append(userInfo.cell);
}


generateUser(userUrl);
