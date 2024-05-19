console.log("Connecté !");

const photo = document.querySelectorAll(".photo");

photo.forEach((item) => {
  item.addEventListener("click", function () {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    item.className = "photo active";
  });
});
