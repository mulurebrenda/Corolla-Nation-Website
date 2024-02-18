//responsive navbar (hide on scroll up, show on scroll down)
var scroll1 = window.pageYOffset;
window.onscroll = function () {
  var scroll2 = window.pageYOffset;
  if (scroll1 > scroll2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  scroll1 = scroll2;
};

//sidebar
function showSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.style.display = "none";
}

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

//copyright
const now = new Date();
const year = now.getFullYear();
const currentYear = document.querySelector(".year");
currentYear.innerHTML = `${year}`;

//gallery-tabs
// Set the initial active tab and content
const allTab = document.getElementById("all-tab");
const imagesTab = document.getElementById("images-tab");
const videosTab = document.getElementById("videos-tab");
const allContent = document.getElementById("all-content");
const imagesContent = document.getElementById("images-content");
const videosContent = document.getElementById("videos-content");

allTab.classList.add("active");
allContent.classList.add("active");

// Handle clicks on the tabs
allTab.addEventListener("click", () => {
  allTab.classList.add("active");
  imagesTab.classList.remove("active");
  videosTab.classList.remove("active");
  allContent.classList.add("active");
  imagesContent.classList.remove("active");
  videosContent.classList.remove("active");
});

imagesTab.addEventListener("click", () => {
  allTab.classList.remove("active");
  imagesTab.classList.add("active");
  videosTab.classList.remove("active");
  allContent.classList.remove("active");
  imagesContent.classList.add("active");
  videosContent.classList.remove("active");
});

videosTab.addEventListener("click", () => {
  allTab.classList.remove("active");
  imagesTab.classList.remove("active");
  videosTab.classList.add("active");
  allContent.classList.remove("active");
  imagesContent.classList.remove("active");
  videosContent.classList.add("active");
});

//form submit
const form = document.querySelector("form");
function sendMessage() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "contact_service";
  const templateID = "template_sqwv5nl";

  emailjs
    .send(serviceID, templateID, params)
    .then((message) => {
      console.log(message);
      Swal.fire({
        width: 150,
        icon: "success",
        iconColor: "#ea2027",
        title: "Message sent!",
        color: "#ea2027",
        showConfirmButton: false,
        timer: 1500,
        showClass: {
          popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `,
        },
      });
    })
    .catch((err) => console.log(err));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});
