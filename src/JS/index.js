const mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"))
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