const button = document.querySelector("button");
const input = document.querySelector("textarea");
const output = document.querySelector("ul");
const divContainer = document.querySelector(".div_container");

const url = "https://www.portabooth.digital/square-eyes/wp-json";

async function callApi(url) {
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

console.log(callApi(url));
/* button.onclick = outputFunction;

function outputFunction() {
  text = input.value;
  output.innerHTML += `<li>${text}</li>`;
  input.value = "";
} */
function addDivs() {
  let newHtml = "";
  for (i = 0; i < 5; i++) {
    newHtml = newHtml + `<div class = "test">hello</div>`;
  }
  divContainer.innerHTML += newHtml;
}
addDivs();
let card = document.querySelectorAll(".div_container div");

for (i = 0; i < card.length; i++) {
  console.log(card[i]);
  card[i].addEventListener("click", function remove() {
    console.log(this.json());
    this.style.backgroundColor = "green";
  });
}
