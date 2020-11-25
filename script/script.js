const img = document.querySelector("img");
function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images")
    .then(response => response.json())
    .then(data => {
      const random = Math.random()
      const integerNumbers = parseInt(random * 150);
      const arrayPhotos = []
      arrayPhotos.push(data.message)
      console.log(arrayPhotos)
      img.src = arrayPhotos[0][integerNumbers]
      img.alt = "un perro"
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage); 