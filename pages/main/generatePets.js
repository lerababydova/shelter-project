document.addEventListener("DOMContentLoaded", ready);

async function ready() {
  const response = await fetch("./public/pets.json");
  const pets = await response.json();
  await generatePets(pets);
}

async function generatePets(pets) {
  const petSlider = document.querySelector(".pets-slider");
  const petCard = document.querySelector("template").content.children[0];

  removeChilds(petSlider);

  pets.forEach((pet) => {
    const petCardCopy = petCard.cloneNode(true);
    petCardCopy.dataset.pet = pet.name;
    petCardCopy.onclick = openModal;
    petCardCopy.querySelector(".pet-img").src = pet.img;
    petCardCopy.querySelector(".pet-name").innerHTML = pet.name;
    petSlider.appendChild(petCardCopy);
  });
}

function removeChilds(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}
