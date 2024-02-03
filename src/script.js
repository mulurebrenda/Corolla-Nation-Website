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

//footer-year
const now = new Date();
const year = now.getFullYear();
const currentYear = document.querySelector(".year");
currentYear.innerHTML = `${year}`;

//gallery-page
//gallery-tabs
//var currentTab = document.querySelector(".tab");
//Add 'active' class when users click on the box
//currentTab.addEventListener("click", function handleClick(event) {
 // event.target.classList.add("current");
//});

//all
function showAll() {
  document.getElementById("gallery").innerHTML = `
  <!--images-->
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-1"></div>
            <div class="full-view">
              <a href="media/images/img-1.jpg" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-2"></div>
            <div class="full-view">
              <a href="media/images/img-2.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-3"></div>
            <div class="full-view">
              <a href="media/images/img-3.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-4"></div>
            <div class="full-view">
              <a href="media/images/img-4.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-5"></div>
            <div class="full-view">
              <a href="media/images/img-5.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-6"></div>
            <div class="full-view">
              <a href="media/images/img-6.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-7"></div>
            <div class="full-view">
              <a href="media/images/img-7.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-8"></div>
            <div class="full-view">
              <a href="media/images/img-8.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-9"></div>
            <div class="full-view">
              <a href="media/images/img-9.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-10"></div>
            <div class="full-view">
              <a href="media/images/img-10.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-11"></div>
            <div class="full-view">
              <a href="media/images/img-11.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-12"></div>
            <div class="full-view">
              <a href="media/images/img-12.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>

          <!--videos-->
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-13">videos</div>
            <div class="full-view">
              <a href="media/videos/video-1.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-14"></div>
            <div class="full-view">
              <a href="media/videos/video-2.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-15"></div>
            <div class="full-view">
              <a href="media/videos/video-3.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-16"></div>
            <div class="full-view">
              <a href="media/videos/video-4.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-17"></div>
            <div class="full-view">
              <a href="media/videos/video-5.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i>
              </a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-18"></div>
            <div class="full-view">
              <a href="media/videos/video-6.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-19"></div>
            <div class="full-view">
              <a href="media/videos/video-7.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-20"></div>
            <div class="full-view">
              <a href="media/videos/video-8.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-21"></div>
            <div class="full-view">
              <a href="media/videos/video-9.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-22"></div>
            <div class="full-view">
              <a href="media/videos/video-10.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-23"></div>
            <div class="full-view">
              <a href="media/videos/video-11.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-24"></div>
            <div class="full-view">
              <a href="media/videos/video-12.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>`;
}

//images
function showImages() {
  document.getElementById("gallery").innerHTML = `
   <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-1"></div>
            <div class="full-view">
              <a href="media/images/img-1.jpg" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-2"></div>
            <div class="full-view">
              <a href="media/images/img-2.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-3"></div>
            <div class="full-view">
              <a href="media/images/img-3.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-4"></div>
            <div class="full-view">
              <a href="media/images/img-4.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-5"></div>
            <div class="full-view">
              <a href="media/images/img-5.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-6"></div>
            <div class="full-view">
              <a href="media/images/img-6.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-7"></div>
            <div class="full-view">
              <a href="media/images/img-7.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-8"></div>
            <div class="full-view">
              <a href="media/images/img-8.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-9"></div>
            <div class="full-view">
              <a href="media/images/img-9.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-10"></div>
            <div class="full-view">
              <a href="media/images/img-10.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-11"></div>
            <div class="full-view">
              <a href="media/images/img-11.jpg" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-12"></div>
            <div class="full-view">
              <a href="media/images/img-12.png" class="image-link"
                ><i class="fa-solid fa-arrow-up-right-from-square"></i
              ></a>
            </div>
          </div>`;
}

//videos
function showVideos() {
  document.getElementById("gallery").innerHTML = `
   <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-13">videos</div>
            <div class="full-view">
              <a href="media/videos/video-1.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-14"></div>
            <div class="full-view">
              <a href="media/videos/video-2.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-15"></div>
            <div class="full-view">
              <a href="media/videos/video-3.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-16"></div>
            <div class="full-view">
              <a href="media/videos/video-4.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-17"></div>
            <div class="full-view">
              <a href="media/videos/video-5.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i>
              </a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-18"></div>
            <div class="full-view">
              <a href="media/videos/video-6.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-19"></div>
            <div class="full-view">
              <a href="media/videos/video-7.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-20"></div>
            <div class="full-view">
              <a href="media/videos/video-8.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-21"></div>
            <div class="full-view">
              <a href="media/videos/video-9.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-22"></div>
            <div class="full-view">
              <a href="media/videos/video-10.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-23"></div>
            <div class="full-view">
              <a href="media/videos/video-11.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>
          <div class="media-container col-sm-6 col-md-3">
            <div class="media" id="media-24"></div>
            <div class="full-view">
              <a href="media/videos/video-12.mp4" class="video-link"
                ><i class="fa-solid fa-circle-play"></i
              ></a>
            </div>
          </div>`;
}

//send button
//document.querySelector(".send-btn").onclick = function sendButton(event) {
//event.preventDefault();
//}