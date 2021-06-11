"use strict";
//Grab elements from the DOM
const projectContainer = document.getElementsByClassName('projects-container');
//For Mini Project
const miniProjects = [
    {
        title: "Tic Tac Toe",
        description: "A web based classic tic tac toe game made with javascript.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://tictactoemadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Tic-Tac-Toe",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]

    },
    {
        title: "COVID-19 Tracker",
        description: "A webpage that track the current COVID-19 stats of Nepal.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://covidtrackernepal.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/COVID-19-Tracker-For-Nepal",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]

    },
    {
        title: "Quiz App",
        description: "Simple quiz app created by javascript.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://quizappmadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Quiz-App",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]

    },
    {
        title: "Running Tracker",
        description: " A web app tracks your daily run and store this in local storage.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://runningtrackermadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Running-Tracker",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Rock Paper and Scissor",
        description: "Web based Rock,Paper and Scissor game.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://rockpaperscissorgamebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Rock-Paper-and-Scissor",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]

    },
    {
        title: "Password Generator",
        description: "Random password generator made with Javascript.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://passwordgeneratormadebypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Password-Generator",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]



    },
    {
        title: "Color Generator",
        description: " A web app that generates random colors and linear gradient.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://colorgeneratormadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Color-Generator",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Sign Up Form",
        description: "Sign up using a database created using Windows form application with C# as a programming language.",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/Sign-Up-Form",
        languagesUsed: ["C#", "MySQL"],
        icons: ["teenyicons:c-sharp-solid", "cib:mysql"]

    },
    {
        title: "Sign In Form",
        description: "Sign in using database created using Windows form application with C# as a programming language. ",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/Sign-in-Form",
        languagesUsed: ["C#", "MySQL"],
        icons: ["teenyicons:c-sharp-solid", "cib:mysql"]


    },
   /* {
        title: "Typing Speed Meter",
        description: "A webpage that evaluate your typing speed.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "#",
        githubLink: "#",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },*/
    {
        title: "Personal Website",
        description: "Responsive single page personal site template.",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        liveLink: "#",
        githubLink: "https://github.com/PrameshKarki/Portfolio-Website",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Number Conversion",
        description: "CUI Program that convert number from one number system to another number system.",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/Number-Conversion",
        languagesUsed: ["C++"],
        icons: ["file-icons:c"]


    },
    {
        title: "Expense Tracker",
        description: "Webapp that stores your expenses and incomes.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://expensetrackermadebypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Expense-Tracker",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Library Book Keeper",
        description: "Webpage that keep the library book information in local storage.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://librarybookkeeper.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Library-Book-Keeper",
        languagesUsed: ["Bootstrap", "Javascript"],
        icons: ["bi:bootstrap-fill", "mdi:language-javascript"]
    },
    {
        title: "News Website",
        description: "Simple webpage that fetch the latest news from the BBC with the help of API.",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        liveLink: "#",
        githubLink: "https://github.com/PrameshKarki/News-Website",
        languagesUsed: ["Bootstrap", "Javascript"],
        icons: ["bi:bootstrap-fill", "mdi:language-javascript"]
    },
    {
        title: "Note App",
        description: "Webpage that take the notes from the user and store it in Local Storage.",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/Note-App",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Temperature Converter",
        description: "A web app that converts temperature from one system to another.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://temperatureconvertermadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Temperature-Converter",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "To Do App",
        description: "Simple To Do app with simple functionality.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://todoappcreatedbypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/To-Do-App",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Calculator",
        description: "Simple calculator that performs basic arithmetic operation.",
        hasLiveLink:false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/Calculator",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Analog Clock",
        description: "Realtime analog clock made with javascript.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://analogclockmadebypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Analog-Clock",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    
    {
        title: "Book App",
        description: "A book app that stores book information in local storage.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://bookappmadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Book-App",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "BMI Calculator",
        description: "A web app that calculates your BMI from the provided information.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://bmicalculatormadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/BMI-Calculator",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]


    },
    {
        title: "Tip Calculator",
        description: "A simple web app that calculates the tip.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://tipcalculatorbypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Tip-Calculator",
        languagesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"]

    },
    

];
const projects = [
    {
        title: "SANDES-Chat App",
        description: "A web based chat app made with web socket,node,express and mongoDB.",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/SANDES-Chat-App",
        technologiesUsed: ["Node JS", "Express"],
        icons: ["la:node", "simple-icons:express"],
        screenshotSrc: "./images/Sandes.png"

    },
    {
        title: "Personal Website",
        description: "A full dynamic personal website.",
        hasLiveLink: false,
        hasCheckRepositoryButton:false,
        technologiesUsed: ["Node JS", "Express"],
        icons: ["la:node", "simple-icons:express"],
        screenshotSrc: "./images/Personal Website.png"

    },
    {
        title: "Portfolio Website",
        description: "My static portfolio website.",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "www.karkipramesh.com.np",
        githubLink: "https://github.com/PrameshKarki/Portfolio-Site",
        technologiesUsed: ["HTML", "SCSS", "Javascript"],
        icons: ["icomoon-free:html-five", "vscode-icons:file-type-scss", "mdi:language-javascript"],
        screenshotSrc: "./images/portfolio site.JPG"

    },
    {
        title: "Hamro Blood Bank",
        description: "A web app that stores blood details of patients in database.",
        hasLiveLink: false,
        hasCheckRepositoryButton:true,
        githubLink:"https://github.com/PrameshKarki/Hamro-Blood-Bank",
        technologiesUsed: ["Node JS", "Express"],
        icons: ["la:node", "simple-icons:express"],
        screenshotSrc: "./images/Hamro Blood Bank.png"

    },
    {
        title: "Contact Number Keeper",
        description: "This is a simple Windows app created using Windows Form Application with C# as a programming language.It stores data into the database(MYSQL in this case).",
        hasLiveLink: false,
        hasCheckRepositoryButton: true,
        githubLink: "https://github.com/PrameshKarki/Contact-Number-Keeper",
        technologiesUsed: ["C#", "MySQL"],
        icons: ["teenyicons:c-sharp-solid", "cib:mysql"],
        screenshotSrc: "./images/contact keeper.png"

    },
    
    {
        title: "Music Player",
        description: "Music player created with Javascript. ",
        hasLiveLink: true,
        hasCheckRepositoryButton: true,
        liveLink: "https://musicplayermadebypramesh.netlify.app",
        githubLink: "https://github.com/PrameshKarki/Music-App",
        technologiesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"],
        screenshotSrc: "./images/music player.png"

    },
    {
        title: "Cross Momentum Engineering Pvt.LTD",
        description: "Website for Cross Momentum Engineering Pvt.LTD",
        hasCheckRepositoryButton: false,
        hasLiveLink: false,
        technologiesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"],
        screenshotSrc: "./images/cross momentum.png"


    },
    {
        title: "Black Board",
        description: "A web-based blackboard with different color pens created with HTML Canvas.",
        hasCheckRepositoryButton: true,
        hasLiveLink: true,
        liveLink: "https://blackboardmadebypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Black-Board",
        technologiesUsed: ["HTML", "CSS", "Javascript"],
        icons: ["icomoon-free:html-five", "simple-icons:css3", "mdi:language-javascript"],
        screenshotSrc: "./images/black board.JPG"
    },
    {
        title: "Scientific Calculator",
        description: "Scientific calculator for windows.",
        hasCheckRepositoryButton: true,
        hasLiveLink: false,
        githubLink: "https://github.com/PrameshKarki/Scientific-Calculator",
        technologiesUsed: ["C#"],
        icons: ["teenyicons:c-sharp-solid"],
        screenshotSrc: "./images/calculator.JPG"
    }
];
(function () {
    //!You can make your own logic.Don't try to understand this foolish logic 
    let htmlCode = ``;
    miniProjects.forEach((element, index) => {
        let innerHtml = ``;
        let liveLinkBtnCode = element.hasLiveLink ? `<button class="live-link" title="Live Link"><a href="${element.liveLink}">
        <span class="iconify" data-inline="false" data-icon="mdi:web"></span>
        </a></button>`: ``;
        let checkRepositoryButtonCode = element.hasCheckRepositoryButton ? `<button class="check-repo-btn"><a href="${element.githubLink}">Check Repository</a></button>` : ``;
        htmlCode += `<div class="project-item" >
        <h3 class="title">${element.title}</h3>
        <p>${element.description}</p>
        <!-- Content Wrapper -->
        <div class="wrapper">
            <div class="buttons-container" >
            ${checkRepositoryButtonCode}
            ${liveLinkBtnCode}    
            </div>
            <!-- Made From -->
            <div class="made-from">`;
        element.languagesUsed.forEach((innerElement, index) => {
            innerHtml += `<div title="${innerElement}" class="technologies-used">
                    <span class="iconify" data-inline="false" data-icon="${element.icons[index]}"></span>
                    </div>`
        });
        htmlCode += innerHtml + `</div ></div ></div >`

    })
    //For mini projects
    projectContainer[1].innerHTML += htmlCode;
})();

//Function to display projects
(function () {
    let htmlCode = ``;
    projects.forEach((element, index) => {
        let aosAttribute=index%2===0?`data-aos="fade-left"`:`data-aos="fade-right"`;
        aosAttribute+=` data-aos-offset="300"
        data-aos-easing="ease-in-sine"`;
      
        
        let innerHtml = "";
        let checkRepositoryButtonCode = element.hasCheckRepositoryButton ? `<button class="check-repo-btn"><a href="${element.githubLink}">Check Repository</a></button>` : ``;
        let liveLinkBtnCode = element.hasLiveLink ? `<button class="live-link"><a href="${element.liveLink}">
        <span class="iconify" data-inline="false" data-icon="mdi:web"></span>
       </a></button>`: ``;
        htmlCode += `<div class="project-item" ${aosAttribute}>
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <!-- Content Wrapper -->
        <div class="wrapper">
            <div class="buttons-container">
                ${checkRepositoryButtonCode}
                ${liveLinkBtnCode}
                <button class="show-screenshot" title="ScreenShot">
                    <span class="iconify" data-inline="false" data-icon="bx:bx-image"></span>
                </button>
            </div>
            <!-- Made From -->
            <div class="made-from">`;
        element.technologiesUsed.forEach((innerElement, index) => {
            innerHtml += `
                <div title="${innerElement}" class="technologies-used">
                    <span class="iconify" data-inline="false" data-icon="${element.icons[index]}"></span>
                </div>`;
        });
        htmlCode += innerHtml + `
          </div >
          </div >
         <!-- ScreenShot Container -->
          <div class="screenshot-project">
              <img src="${element.screenshotSrc}" alt="screenshot">
          </div>
          </div>`;

    });

    projectContainer[0].innerHTML = htmlCode;
})();
