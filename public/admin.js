const { get } = require("express/lib/response");

// Your Code Here
const domain_url = "http://localhost:3001";
const endPoint ="listBooks";
let currentInput = ""
async function  getAllBooks () {
    const response = await fetch(`${domain_url}/${endPoint}`);
    const Books = await response.json();
    return Books;
    
}
const books = await getAllBooks();

function handleInput(e){
    input = e.target.value;
    console.log(currentInpiut);
}
function handleUpdate (e){
input = e.target.value;
console.log(currentInpiut);
}

let bookElement = books.map((book) => {
    //return `<li>${book.title}
    //<input id=${book.id} onInput=${handleInput} type=
    //<button onClick=${handleInput}>update</button>
    // </li>`;
})
const ul = document.querySelector("ul");
ul.innerHTML = booksElement;
rootElement.appendChild(ul);

//fetch(`${domain_url}/${endPoint}`)
//.then((res)=> {
 //   return res;
//})
