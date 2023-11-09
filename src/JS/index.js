const colorList = document.querySelectorAll(".colors-list li");
const mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
  //Remove Class .active from All Elements
  colorList.forEach((element) => {
    element.classList.remove("active");
    //Add Class .active on each element and save it on Local Storeage
    if (element.dataset.color === mainColors) {
      //Added Class .active
      element.classList.add("active");
    }
  });
}

const btn = document.querySelector(".setting-sider .fa-gear");
btn.onclick = () => {
  //let Setting-gear Rotation
  btn.classList.toggle("fa-spin");
  //let the setting-box open
  document.querySelector(".setting-box").classList.toggle("open");
};

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
//loop to get all <li> elements
colorsLi.forEach((li) => {
  //add event for each <li> element
  li.addEventListener("click", (event) => {
    //set color on :root
    document.documentElement.style.setProperty(
      "--main-color",
      event.target.dataset.color
    );
    //save colors on local storage
    localStorage.setItem("color_option", event.target.dataset.color);
    // Remove Class .active from firstElement and add it to the Next ChildElement
    event.target.parentElement.querySelectorAll(".active").forEach((elem) => {
      elem.classList.remove("active");
    });
    event.target.classList.add("active");
  });
});

// skills-section selected

const mySkills = document.querySelector(".skills-container");

window.onscroll = function () {
  // Skill Offset To The Top
  let skillsOffsetTop = mySkills.offsetTop;
  // Skill Offset To The Height
  let skillsOuterHeight = mySkills.offsetHeight;
  // Window Height
  let windowHeight = window.innerHeight;
  // Window Scroll Up
  let windowScrollTop = window.scrollY;
  // Window Scroll Down
  let windowScrollDown = window.scrollX;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progrees span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};
// Create Image Popup
const myGallary = document.querySelectorAll(
  ".gallary-container .gallary-img img"
);
myGallary.forEach((img) => {
  //Add Click Event For Each Image
  img.addEventListener("click", (e) => {
    // Create Overlay Element
    let overlay = document.createElement("div");
    //Added ClassName For The New Overlay Element
    overlay.className = "popup-container";
    // Add The Popup Container To The Body
    document.body.appendChild(overlay);
    // Create The Popup
    let popupBox = document.createElement("div");
    // Added ClassName For The New Popup Box Element
    popupBox.className = "popup-box";

    // If The Image Not Found, Use The ALT
    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");
      // Create The Heading Text
      let headingText = document.createTextNode(img.alt);
      // Add The Heading Text To The Heading (h3) => Element
      imgHeading.appendChild(headingText);
      // add The imgHeading To The popupBox
      popupBox.appendChild(imgHeading);
    }

    // Create The Image
    let popupImage = document.createElement("img");
    // When Click on The Img, It will get The Image SRC
    popupImage.src = img.src;
    // Add The popupImage On The popupBox as a Child
    popupBox.appendChild(popupImage);
    // Add The popupBox To The Body
    document.body.appendChild(popupBox);

    // Create The Popup Close BTN
    let popupClose = document.createElement("span");
    // Create The Popup Close BTN Text
    let closeBtnText = document.createTextNode("X");
    // Add The Closebtn To The popupClose
    popupClose.appendChild(closeBtnText);
    // Add Class To Close The popup
    popupClose.className = "close-popup";
    // Add the popup Close To The popupBox
    popupBox.appendChild(popupClose);
  });
  document.addEventListener('click', (e) => {

    if (e.target.className === "close-popup") {
      e.target.parentNode.remove()
      let closeingPopup = document.querySelector(".popup-container")
      closeingPopup.remove();
    };
  });
});

// Select The Bullets

const allBullets = document.querySelectorAll(".setting-container .option-box-two .bullets-list li");
  allBullets.forEach(bullet => {bullet.addEventListener("click", (e) => {document.querySelector(e.target.dataset.section).scrollIntoView({behavior: "smooth"});});});