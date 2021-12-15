const button = document.querySelector("button");
const q = document.querySelector("h1");


async function genrateQuote() {
  let api = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
  let allQuote = await api.json();
  q.innerText = `" ${allQuote.slip.advice} "`;
}

button.addEventListener('click', genrateQuote);