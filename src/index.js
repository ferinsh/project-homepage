import createProjectList from "./createProjectList";
import displayProjectList from "./displayProjectList";
import './styles.css';

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
    let arrProject = {links : arrProjectLinks,
    names :arrProjectNames};
    
    let projectList = createProjectList(arrProject);;
    // console.log(projectList);
    
    displayProjectList(projectList);

})

// let projectTab = document.querySelector("#projectTab");
// projectTab.addEventListener("click", () => {
//     location.replace("../dist/test.html");
// })

