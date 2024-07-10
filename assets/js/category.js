let params = new URLSearchParams(document.location.search);
let categoryToShow = params.get("category");

document.querySelector("#category").textContent=categoryToShow;

let url = `http://localhost:3000/products?category_like=${categoryToShow}`;
let urlProduct= `http://localhost:3000/products`;
let elMenu = document.querySelector("#products");
// let ulList=document.getElementById("nameList");

// function fillFields(menuItem) {
//     document.querySelector("#name").textContent = menuItem.name;
//     // document.querySelector("#description").textContent = menuItem.description;
//     // document.querySelector("#price").textContent = menuItem.price + " €";
//     // document.querySelector("#category").textContent = menuItem.category;
// }

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
    .then(productlist)
    .catch(error => {
        alert("The following error occurred: " + error);
    })

    async function fetchProductData() {
        try {
            // const response = await fetch(urlProduct);
            const response = await fetch(url);
            const data = await response.json();
            
            const productList = document.getElementById('nameList');
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.innerHTML = `
                    <h2>${product.modal}</h2>
                `;
                productList.appendChild(productElement);
            });
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    }

    // Call the function to fetch and display the data
    fetchProductData();