const random_names = [
  "Vanshika",
  "Longstula",
  "Jyotirman",
  "Mushkan",
  "Anisha",
  "Alex",
  "Alexa"
];

const button = document.querySelector("button");
const names = document.querySelector("h1");

button.addEventListener("click", () => {
  const index = Math.floor(Math.random() * random_names.length);
  names.textContent = random_names[index];
});