//sidebar
function showSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "none";
}

//events-scroll
const eventContainers = [...document.querySelectorAll(".event-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

eventContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});

//animate-sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//footer-year
const now = new Date();
const year = now.getFullYear();
const currentYear = document.querySelector(".year");
currentYear.innerHTML = `${year}`;

//animate slogan
const text = document.querySelector(".slogan");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Corolla Owners Club 🇰🇪 ";
  }, 0);
  setTimeout(() => {
    text.textContent = "Life is best with a Rolla";
  }, 5000);
}
textLoad();
setInterval(textLoad, 10000);