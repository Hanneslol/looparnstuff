import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

const theNumber = 5003;

const input = document.createElement("input");
input.id = "input"

document.body.appendChild(input);

const guessButton = document.createElement("button");
guessButton.id = "button";

document.body.appendChild(guessButton);
guessButton.innerHTML = "Gissa";
let theGuess = 0;
const p = document.createElement("p");

guessButton.addEventListener("click", () => {
  theGuess = input.value;
  console.log(theGuess);
  if (theGuess !== isNaN) {
    p.innerHTML = ""
    document.body.appendChild(p);
    p.innerHTML = "Skriv en siffra";
  }

  if (theGuess < theNumber) {

    p.innerHTML = ""
    document.body.appendChild(p);
    p.innerHTML = "Det var ett lågt nummer";
  }
  if (theGuess > theNumber) {

    p.innerHTML = ""
    document.body.appendChild(p);
    p.innerHTML = "Det var ett högt nummer";
  }
  if (theGuess === theNumber) {

    p.innerHTML = ""
    document.body.appendChild(p);
    p.innerHTML = "Det var rätt nummer";
  }

})


const colors = ["Rosa", "Blå", "Grön", "Gul"];

let section = document.createElement("section");
section.id = "section";
document.body.appendChild(section);



for (let i = 0; i < colors.length; i++) {
  const colorsClick = colors[i];
  let div = document.createElement("div");
  div.className = "colors";
  section.appendChild(div);
  div.innerHTML = colors[i];

  div.addEventListener('click', () => {
    handleColorsClick(colors[i])
  })
  div.innerHTML = colors[i];
}

const handleColorsClick = (clickedColor) => {
  console.log("Du valde färgen: ", clickedColor)
}

async function logMovies() {
  const response = await fetch('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  const movies = await response.json();


  for (let index = 0; index < movies.length; index++) {
    const myMovies = movies[index];
    const movieDiv = document.createElement("div")

    const section = document.createElement("section");
    section.id = "mySection";
    section.innerHTML = movies[index].name
    document.body.appendChild(section);
    console.log(movies)
    const images = document.createElement("img")
    images.setAttribute("src", movies[index].imageUrl)
    document.body.appendChild(images)
    document.body.appendChild(movieDiv)
    movieDiv.appendChild(section)
    movieDiv.appendChild(images)
  }
  //   console.log(movies)
  // const selectedMovies = movies.map((value) => value);
  // console.log(Object.values(selectedMovies));
  //   console.log(selectedMovies)
};

logMovies()





