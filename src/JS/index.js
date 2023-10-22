// when click on setting-gear it makes it spin 
document.querySelector('.setting-sider .fa-gear').onclick = function() {
    // let Setting-gear Rotation
    this.classList.toggle("fa-spin");
};

  // let the setting-box open
document.querySelector('.setting-box').onclick = function() {
    this.classList.toggle("open")
};
