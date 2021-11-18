// *Grab elements from the DOM
const closeButton = document.querySelector("#close-btn");
const navigationMenu = document.getElementById("navigation-menu");
const navigationButton = document.querySelector("#navigation-btn");
const modeSwitchButton = document.querySelector("#switch-btn");


// * Method for showing/hiding spinner
const loader = document.getElementById("cssload-wrapper");
window.addEventListener("load", (e) => {
    loader.style.display = "none";
    navigationButton.style.display = "flex";
    document.body.style.height = "initial";
})



navigationButton.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("navigation"))
        navigationMenu.classList.add("show-navigation");


})
closeButton.addEventListener("click", (e) => {
    if (navigationMenu.classList.contains("show-navigation"))
        navigationMenu.classList.remove("show-navigation");
})

//* Method to hide navigation on click
window.addEventListener("click", (e) => {
    if (!e.target.parentNode.classList.contains("navigation"))
        if (navigationMenu.classList.contains("show-navigation"))
            navigationMenu.classList.remove("show-navigation");
})
