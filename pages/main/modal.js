document.addEventListener("DOMContentLoaded", ready);
function ready() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".modal-close");
  const btnsOpenModal = document.querySelectorAll(".pets-slider-card");

  console.log(btnsOpenModal);

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  };

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  btnsOpenModal.forEach((b) => {
    b.addEventListener("click", openModal);
  });
}

async function openModal(event) {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");

  const petAge = document.querySelector(".pet-age-number");
  const inocalutions = document.querySelector(".pet-inocalutions-type");
  const petDiseases = document.querySelector(".pet-diseases-value");
  const petParasites = document.querySelector(".pet-parasites-value");
  const petsName = document.querySelector(".modal-pet-name");
  const petType = document.querySelector(".modal-pet-type");
  const petBreed = document.querySelector(".modal-pet-breed");
  const petDesc = document.querySelector(".modal-pet-description");
  const petPic = document.querySelector(".modal-img");

  const petName = event.currentTarget.dataset.pet;
  const response = await fetch("./public/pets.json");
  const jsonArr = await response.json();
  const petObj = jsonArr.find((pet) => {
    return pet.name === petName;
  });

  petAge.innerHTML = petObj.age;
  inocalutions.innerHTML = petObj.inoculations;
  petDiseases.innerHTML = petObj.diseases;
  petParasites.innerHTML = petObj.parasites;
  petsName.innerHTML = petObj.name;
  petType.innerHTML = petObj.type;
  petBreed.innerHTML = petObj.breed;
  petDesc.innerHTML = petObj.description;
  petPic.src = petObj.img;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
