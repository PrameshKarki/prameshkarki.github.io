"use strict";
//Grab elements from the DOM
const projectContainer = document.getElementsByClassName('projects-container')[1];
//For Mini Project
const miniProjects = [
    {
        title: "COVID-19 Tracker",
        description: "A webpage that track the current COVID-19 stats of Nepal.",
        liveLink: "",
        githubLink: "https://github.com/PrameshKarki/COVID-19-Tracker-For-Nepal",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]

    },
    {
        title: "Color Generator",
        description: "A webpage that generate different colors and linear gradient.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Typing Speed Meter",
        description: "A webpage that evaluate your typing speed.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Personal Website",
        description: "Responsive single page personal site template.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Number Conversion",
        description: "CUI Program that convert number from one number system to another number system.",
        githubLink: "#",
        languagesUsed: ["C++"],
        icons: ["file-icons:c"]


    },
    {
        title: "Expense Tracker",
        description: "A webpage that track the user expenses and incomes.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Library Book Keeper",
        description: "Webpage that keep the library book information in local storage.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["Bootstrap", "Javascript"],
        icons: ["bi:bootstrap-fill", "mdi:language-javascript"]
    },
    {
        title: "News Website",
        description: "Simple webpage that fetch the latest news from the BBC with the help of API.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["Bootstrap", "Javascript"],
        icons: ["bi:bootstrap-fill", "mdi:language-javascript"]
    },
    {
        title: "Note App",
        description: "Webpage that take the notes from the user and store it in Local Storage.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Weather Info",
        description: "Webpage that give the current temperature of the user location.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "To Do App",
        description: "Simple To Do app with simple functionality.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Calculator",
        description: "Simple calculator that performs basic arithmetic operation.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Counter",
        description: "A webpage that counts the number as per user need.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Digital Clock",
        description: "A webpage that shows current time",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Form Validation",
        description: "A form that validates user inputs with the help of regular expression in client side.",
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    }
];
(function() {
    //!You can make your own logic.Don't try to understand this foolish logic 
    let html = ``;
    miniProjects.forEach((element, index) => {
        let innerHtml = ``;
        html += `<div class="project-item">
        <h3 class="title">${element.title}</h3>
        <p>${element.description}</p>
        <!-- Content Wrapper -->
        <div class="wrapper">
            <div class="buttons-container">
            <button class="check-repo-btn"><a href="${element.githubLink}">Check Repository</a></button>
            <button class="live-link" title="Live Link"><a href="">
                            <span class="iconify" data-inline="false" data-icon="akar-icons:github-fill"></span>
            </a></button>
            </div>
            <!-- Made From -->
            <div class="made-from">`;
            element.languagesUsed.forEach((innerElement, index) => {
            innerHtml += `<div title="${innerElement}" class="technologies-used">
                    <span class="iconify" data-inline="false" data-icon="${element.icons[index]}"></span>
                    </div>`
        });
        html+= innerHtml + `</div ></div ></div >`

    }) 
    projectContainer.innerHTML+=html;
    console.log(html)
})();
