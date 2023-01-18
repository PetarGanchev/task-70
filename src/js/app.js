import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

      const main = document.querySelector(".main");
      const image = document.createElement('div');
      image.classList.add('image');
        //img
        const img = document.createElement('img');
        img.src = "https://www.w3schools.com/howto/img_avatar.png";
        
        //images
        image.appendChild(img);

        //main
        main.appendChild(image)

//scaleImage
function scaleImage() {
  image.style.transform = "scale(2)";
}

      image.addEventListener('click', scaleImage);


      console.log(main, image, img);

});
