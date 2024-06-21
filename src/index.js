import createProjectList from "./createProjectList";
import displayProjectList from "./displayProjectList";
import '../dist/index.css';

// console.log("hi");

document.addEventListener("DOMContentLoaded", ()=> {
    // console.log("DOMContentLoaded");
    let arrProjectLinks = [
        "https://ferinsh.github.io/project-weather-app/",
        "https://youtube.com",
        "https://google.com",
        "https://github.com/ferinsh",
        "https://instagram.com",
        "https://ferinsh.github.io/tictactoe/",
        "https://ferinsh.github.io/project-game-rps/",
    ];
    let arrProjectNames = ["Weather App", "Youtube", "Google", "Github", "Instagram", "Tic Tac Toe", "Rock Paper Scissors"];
    let arrProjImgSrc = [
        "./images/weatherapp_logo.png",
        "./images/youtube_logo.png",
        "./images/google_logo.png",
        "./images/github_logo.png",
        "./images/instagram_logo.png",
        "./images/tictactoe_logo.png",
        "./images/rockpaperscissors_logo.png",
    ];
    let arrProject = {
        links : arrProjectLinks,
        names : arrProjectNames,
        img : arrProjImgSrc,
    };
    
    let projectList = createProjectList(arrProject);;
    // console.log(projectList);
    
    displayProjectList(projectList);
    // console.log(projectList[0].link);
    // console.log(projectList[1].img);

})

// let projectTab = document.querySelector("#projectTab");
// projectTab.addEventListener("click", () => {
//     location.replace("../dist/test.html");
// })

