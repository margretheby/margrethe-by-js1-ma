const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];
// Question 1
const cat = {
    complain: function() {
        console.log("Meow");
    }
};

// Question 2
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.className = "subheading";

// Question 5
let paragraph = document.querySelectorAll("p");
for(let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}

// Question 6
let resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p> New paragraph </p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7
function list(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
} 
list(cats);

// Question 8
let catsContainer = document.querySelector(".cat-container");

function createCats(cats) {
    for(let i = 0; i < cats.length; i++) {
        let unknownAge = "Age unknown";
        if (!cats[i].age) {
            catsContainer.innerHTML += `<div><h5>${cats[i].name}</h5><p>${unknownAge}</p></div>`;
        } else {
        catsContainer.innerHTML += `<div><h5>Name: ${cats[i].name}</h5><p>Age: ${cats[i].age}</p></div>`
        };
    }
};

createCats(cats);
