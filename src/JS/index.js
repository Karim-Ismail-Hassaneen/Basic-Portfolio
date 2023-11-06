const colorList = document.querySelectorAll(".colors-list li");
const mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', mainColors)
  //Remove Class .active from All Elements
  colorList.forEach(element => {
    element.classList.remove("active");
    //Add Class .active on each element and save it on Local Storeage 
    if (element.dataset.color === mainColors) {
      //Added Class .active
      element.classList.add("active");
    }
  })
}

const btn = document.querySelector(".setting-sider .fa-gear");
  btn.onclick = () => {
  //let Setting-gear Rotation
    btn.classList.toggle("fa-spin");
  //let the setting-box open
  document.querySelector(".setting-box").classList.toggle("open");
}

  //switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
//loop to get all <li> elements
colorsLi.forEach(li => {
  //add event for each <li> element
  li.addEventListener("click", (event) => {
    //set color on :root 
    document.documentElement.style.setProperty('--main-color', event.target.dataset.color)
    //save colors on local storage
    localStorage.setItem("color_option", event.target.dataset.color)
    // Remove Class .active from firstElement and add it to the Next ChildElement
    event.target.parentElement.querySelectorAll(".active").forEach(elem => {
      elem.classList.remove("active")});
    event.target.classList.add("active");
  })
})

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

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progrees span");
          allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
    });
  }
        
}  