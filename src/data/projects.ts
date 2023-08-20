import images from "./images";

export type Project = {
    title: string;
    description: string;
    liveLink?: string;
    githubLink?: string;
    technologiesUsed: string[];
    technologiesIcons: string[];
    image?: string;

}

const projects: Project[] = [
    {
        title: "PU Hub",
        description:
            "PU Hub is an app made for all students under Pokhara University where students can find notes,question collections,syllabus of every subjects and college details which are affiliated under Pokhara University.",
        liveLink:
            "https://play.google.com/store/apps/details?id=tech.webtron.puhub",
        technologiesUsed: ["Dart", "Flutter", "Javascript", "Postgresql"],
        technologiesIcons: [
            "simple-icons:dart",
            "cib:flutter",
            "mdi:language-javascript",
            "cib:postgresql",
        ],
        image: images.PUHub,
    },
    {
        title: "Yeti Army NFT",
        description:
            "NFT project where you can adopt your own Yeti Armies who will fight with you to take the world back.",
        liveLink: "https://www.yeti.army/",
        technologiesUsed: ["HTML", "SCSS", "JS", "React", "Typescript", "Mongo DB"],
        technologiesIcons: [
            "icomoon-free:html-five",
            "vscode-icons:file-type-scss",
            "mdi:language-javascript",
            "bx:bxl-react",
            "cib:typescript",
            "simple-icons:mongodb",
        ],
        image: images.YetiArmy,
    },
    {
        title: "SANDES-Chat App",
        description:
            "A web based chat app made with web socket,node,express and mongoDB.",
        githubLink: "https://github.com/PrameshKarki/SANDES-Chat-App",
        technologiesUsed: ["Node JS", "Express", "Mongo DB"],
        technologiesIcons: ["la:node", "simple-icons:express", "simple-icons:mongodb"],
        image: images.Sandes,
    },
    {
        title: "Numerical Methods",
        description: " Flutter app which solves various numerical methods problem.",
        githubLink: "https://github.com/PrameshKarki/Numerical-Methods",
        technologiesUsed: ["Dart", "Flutter"],
        technologiesIcons: ["simple-icons:dart", "cib:flutter"],
        image: images.NumericalMethods,
    },
    {
        title: "Personal Website",
        description: "A full dynamic personal website.",
        technologiesUsed: ["Node JS", "Express", "Mongo DB"],
        technologiesIcons: ["la:node", "simple-icons:express", "simple-icons:mongodb"],
        image: images.PersonalWebsite,
    },
    {
        title: "Hospital Management Software",
        description: "A desktop app designed to eliminate paper work on hospitals.",
        githubLink: "https://github.com/PrameshKarki/webTRON-Management-Software",
        technologiesUsed: ["C#", "My SQL"],
        technologiesIcons: ["teenyicons:c-sharp-solid", "cib:mysql"],
        image: images.HospitalManagementSoftware,
    },

    {
        title: "Portfolio Website",
        description: "My static portfolio website.",
        liveLink: "www.karkipramesh.com.np",
        githubLink: "https://github.com/PrameshKarki/Portfolio-Site",
        technologiesUsed: ["HTML", "SCSS", "Javascript"],
        technologiesIcons: [
            "icomoon-free:html-five",
            "vscode-icons:file-type-scss",
            "mdi:language-javascript",
        ],
        image: images.Portfolio,
    },
    {
        title: "Hamro Blood Bank",
        description: "A web app that stores blood details of patients in database.",
        githubLink: "https://github.com/PrameshKarki/Hamro-Blood-Bank",
        technologiesUsed: ["Node JS", "Express", "Mongo DB"],
        technologiesIcons: ["la:node", "simple-icons:express", "simple-icons:mongodb"],
        image: images.HamroBloodBank,
    },
    {
        title: "Black Board",
        description:
            "A web-based blackboard with different color pens created with HTML Canvas.",
        liveLink: "https://blackboardmadebypramesh.netlify.app/",
        githubLink: "https://github.com/PrameshKarki/Black-Board",
        technologiesUsed: ["HTML", "CSS", "Javascript"],
        technologiesIcons: [
            "icomoon-free:html-five",
            "simple-icons:css3",
            "mdi:language-javascript",
        ],
        image: images.BlackBoard,
    },
    
];

export default projects;