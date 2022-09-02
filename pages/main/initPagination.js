let paginatePets = [];
let page = 1;
let PAGES_COUNT = 6;
let petsCopy = [];

async function initPagination() {
  initDevicePagination(window.innerWidth);
  const response = await fetch("./public/pets.json");
  const pets = await response.json();
  petsCopy = pets;

  populatePetsPages();

  const nextPage = document.getElementById("next-page");
  const lastPage = document.getElementById("last-page");
  const previousPage = document.getElementById("previous-page");
  const firstPage = document.getElementById("first-page");

  nextPage.addEventListener("click", () => handlePage(page + 1));
  lastPage.addEventListener("click", () => handlePage(paginatePets.length));
  previousPage.addEventListener("click", () => handlePage(page - 1));
  firstPage.addEventListener("click", () => handlePage(1));
}

function handlePage(_page) {
  const nextPage = document.getElementById("next-page");
  const lastPage = document.getElementById("last-page");
  const previousPage = document.getElementById("previous-page");
  const firstPage = document.getElementById("first-page");
  const activeBtn = document.querySelector(".pagination-button__active");
  activeBtn.innerHTML = _page;
  page = _page;

  if (_page >= paginatePets.length) {
    nextPage.classList.add("pagination-button__disabled");
    lastPage.classList.add("pagination-button__disabled");
    previousPage.classList.remove("pagination-button__disabled");
    firstPage.classList.remove("pagination-button__disabled");
  }

  if (_page <= 1) {
    previousPage.classList.add("pagination-button__disabled");
    firstPage.classList.add("pagination-button__disabled");
    nextPage.classList.remove("pagination-button__disabled");
    lastPage.classList.remove("pagination-button__disabled");
  }

  if (_page > 1 && _page < paginatePets.length) {
    previousPage.classList.remove("pagination-button__disabled");
    firstPage.classList.remove("pagination-button__disabled");
    nextPage.classList.remove("pagination-button__disabled");
    lastPage.classList.remove("pagination-button__disabled");
  }

  page = _page;

  const pets = paginatePets[page - 1];
  generatePets(pets);
}

function initDevicePagination(width) {
  if (width < 768) {
    PAGES_COUNT = 16;
  } else if (width < 1280) {
    PAGES_COUNT = 8;
  } else {
    PAGES_COUNT = 6;
  }
  page = 1;
  populatePetsPages();
}

window.addEventListener("resize", onResizeWindow, false);

function onResizeWindow(event) {
  initDevicePagination(event.target.innerWidth);
  handlePage(page);
}

function populatePetsPages() {
  const pts = Array.from({ length: PAGES_COUNT - 1 }).map(() => {
    const randomPets = [...petsCopy].sort(() => 0.5 - Math.random());
    return randomPets;
  });

  paginatePets = [petsCopy, ...pts];
}
