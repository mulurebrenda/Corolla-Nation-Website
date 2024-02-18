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
const galleryItems = document.querySelectorAll(".media-container");
const galleryTabs = document.querySelectorAll(".gallery-tab");

function filterItems(type) {
  galleryItems.forEach((item) => {
    if (
      type === "all" ||
      (type === "image" && item.dataset.type === "image") ||
      (type === "video" && item.dataset.type === "video")
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    galleryTabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    const type = tab.dataset.filter;
    filterItems(type);
  });
});

// Show all items initially
filterItems("all");

//form submit
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
      return false;
    })
    .catch((err) => console.log(err));
}

function handleFormSubmit (e) {
  e.preventDefault();
  sendMessage();
};


