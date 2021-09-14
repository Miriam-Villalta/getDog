function getDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "Un chihuahua";
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);
