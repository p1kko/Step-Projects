//   <----------------------------------Our Services [Tabs]----------------------->

let tab = document.querySelectorAll(".service-menu-wrapper li");
let tabContent = document.querySelectorAll(".service-flex");

for (let i = 0; i < tab.length; i++) {
  tab[i].classList.add("tabs-title");

  tab[i].addEventListener("click", function () {
    for (let u = 0; u < tab.length; u++) {
      tabContent[u].style.display = "none";
      tab[u].classList.remove("active", "design-btn");
    }

    tabContent[i].style.display = "flex";
    this.classList.add("active", "design-btn");
  });
}

//   <----------------------------------Our Amazing Work [Filters]----------------------->

let ourWorkButtons = document.querySelector(".our-work-list");
let ourWorkImages = document.querySelectorAll(".our-work-flex-item");

function filter() {
  ourWorkButtons.addEventListener("click", (event) => {
    const targetId = event.target.dataset.id;

    switch (targetId) {
      case "all":
        getItems("our-work-flex-item");
        break;

      case "graphic":
        getItems(targetId);
        break;

      case "web":
        getItems(targetId);
        break;

      case "landing":
        getItems(targetId);
        break;

      case "wordpress":
        getItems(targetId);
        break;
    }
  });
}
filter();

function getItems(className) {
  ourWorkImages.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//   <----------------------------------Our Amazing Work [AddPhotos]----------------------->

const loadBtn = document.querySelector(".upload-btn");
const imagesContainer = document.querySelector(".our-work-flex");

const arrImages = [
  `./img/addmore/1.jpg`,
  `./img/addmore/2.jpg`,
  `./img/addmore/3.jpg`,
  `./img/addmore/4.jpg`,
  `./img/addmore/5.jpg`,
  `./img/addmore/6.jpg`,
  `./img/addmore/7.jpg`,
  `./img/addmore/8.jpg`,
  `./img/addmore/9.jpg`,
  `./img/addmore/10.jpg`,
  `./img/addmore/11.jpg`,
  `./img/addmore/12.jpg`,
];

addImages = () => {
  loadBtn.addEventListener("click", () => {
    for (let i = 0; i < arrImages.length; i++) {
      const newImage = document.createElement("img");
      newImage.src = arrImages[i];
      newImage.height = "206";
      newImage.width = "283.98";
      imagesContainer.append(newImage);
    }

    loadBtn.style.display = "none";
  });
};
addImages();

//<----------------------------------------------Slider------------------------------------------------->

$(".feedback-user-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".feedback-user",
});

$(".feedback-user").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".feedback-user-content",
  centerMode: true,
  centerPadding: "10px",
  focusOnSelect: true,
  arrows: true,
  dots: false,
  nextArrow: '<i class="slick-next"><img src="./img/slider-img/arrow-next.png" alt="arrow-next"></i>',
  prevArrow:  '<i class="slick-prev"><img src="./img/slider-img/arrow-prev.png" alt="arrow-prev"></i>',
});


