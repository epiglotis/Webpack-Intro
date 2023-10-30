import generateJoke from "./generateJoke";
import "./styles/main.scss"
import laughingImage from "./assets/laugh-and-cry-svgrepo-com.svg"

const laughImg = document.getElementById("laughImg");
laughImg.src = laughingImage;

const jokeBtn = document.getElementById("jokeBtn")
jokeBtn.addEventListener("click",generateJoke)

generateJoke();