let params = new URLSearchParams(document.location.search);
let categoryToShow = params.get("category");

document.querySelector("#category").textContent=categoryToShow;

let url = `http://localhost:3000/products?category_like=${categoryToShow}`;

function fillFields(menuItem) {
    document.querySelector("#name").textContent = menuItem.name;
    document.querySelector("#description").textContent = menuItem.description;
    document.querySelector("#price").textContent = menuItem.price + " €";
    document.querySelector("#category").textContent = menuItem.category;
}

fetch(url)
    .then(response => {
        if (response.ok) { // 200
            return response.json();
        } else {
            if (response.status === 404) {
                return Promise.reject("URL does not exist");
            } else {
                return Promise.reject("Unknown error");
            }
        }
    })
    .then(fillFields)
    .catch(error => {
        alert("The following error occurred: " + error);
    })