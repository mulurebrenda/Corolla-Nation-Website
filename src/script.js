function showSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "none";
}
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
