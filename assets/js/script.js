let url = "http://localhost:3000/categories";
let elMenu = document.querySelector("#categories");

let ulList=document.getElementById("cat-nav");


// function fillSelectCategories(categories) {
//     for (let category of categories) {
//         elListCategories.innerHTML += `<option>${category}</option>`;
//     }
// }
// function categoryList() {
//     fetch(url)
//         .then(response => {
//             if (response.ok) { // 200
//                 return response.json();
//             } else {
//                 if (response.status === 404) {
//                     return Promise.reject("URL does not exist");
//                 } else {
//                     return Promise.reject("Unknown error");
//                 }
//             }
//         })
//         .then(fillSelectCategories)
//         .catch(error => {
//             alert("The following error occurred: " + error);
//         })
// }
// categoryList();

fetch(url)
    .then(res=>res.json())
    .then(json=>{
        json.map(category=>{
            console.log(category);
            ulList.append(categoryList(category));
        })
    })

function categoryList(name){
    let list = document.createElement('li');
    list.innerHTML=`<li><a href="category.html?category=${name}">${name}</a></li>`;
    return list;
}


