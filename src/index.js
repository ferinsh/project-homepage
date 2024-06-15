import createProjectList from "./createProjectList";
import displayProjectList from "./displayProjectList";
import '../dist/index.css';

console.log("hi");

document.addEventListener("DOMContentLoaded", ()=> {
    console.log("DOMContentLoaded");
    let arrProjectLinks = [
        "https://ferinsh.github.io/project-weather-app/",
        "https://youtube.com",
        "https://google.com",
        "https://github.com",
        "https://instagram.com",
    ];
    let arrProjectNames = ["Weather App", "Youtube", "Google", "Github", "Instagram"];
    let arrProjImgSrc = [];
    let arrProject = {
        links : arrProjectLinks,
        names : arrProjectNames,
        img : arrProjImgSrc,
    };
    
    let projectList = createProjectList(arrProject);;
    // console.log(projectList);
    
    displayProjectList(projectList);
    // console.log(projectList[0].link);

})

// let projectTab = document.querySelector("#projectTab");
// projectTab.addEventListener("click", () => {
//     location.replace("../dist/test.html");
// })

