// *Grab elements from the DOM
const closeButton = document.querySelector("#close-btn");
const navigationMenu = document.getElementById("navigation-menu");
const navigationButton = document.querySelector("#navigation-btn");
const modeSwitchButton=document.querySelector("#switch-btn");


// * Method for showing/hiding spinner
const loader = document.getElementById("cssload-wrapper");
window.addEventListener("load", (e) => {
    loader.style.display = "none";
    navigationButton.style.display="flex";
    document.body.style.height = "initial";
})

navigationButton.addEventListener("mouseenter", (e) => {
    if (!navigationMenu.classList.contains("show"))
        navigationMenu.classList.add("show");
})

navigationButton.addEventListener("mouseleave", (e) => {
    setTimeout(() => {
        if (navigationMenu.classList.contains("show"))
            navigationMenu.classList.remove("show");
    }, 1000)
})


navigationButton.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("navigation"))
        navigationMenu.classList.add("show-navigation");


})
closeButton.addEventListener("click", (e) => {
    if (navigationMenu.classList.contains("show"))
        navigationMenu.classList.remove("show");
    if (navigationMenu.classList.contains("show-navigation"))
        navigationMenu.classList.remove("show-navigation");
})


//* Mode to switch button
modeSwitchButton.addEventListener("click",(e)=>{
        let darkMode=localStorage.getItem("darkMode") || "true";
        darkMode=darkMode==="true"? true : false;
        console.log(darkMode);
        if(darkMode){
            // *Change in white mode here
            document.documentElement.style.setProperty("--primary-background-color","white");
            document.documentElement.style.setProperty("--secondary-background-color","#006eff");
            document.documentElement.style.setProperty("--dev-color","#006eff");
            document.documentElement.style.setProperty("--page-heading-color","black");
            modeSwitchButton.innerText="Dark";
            localStorage.setItem("darkMode","false");
            
        }else{
            // *Switch back to dark mode here
            document.documentElement.style.setProperty("--primary-background-color","#191919");
            document.documentElement.style.setProperty("--secondary-background-color","#232323");
            document.documentElement.style.setProperty("--dev-color","#ded2d2");
            document.documentElement.style.setProperty("--page-heading-color","white");
            modeSwitchButton.innerText="White";
            localStorage.setItem("darkMode","true");
        }
    })