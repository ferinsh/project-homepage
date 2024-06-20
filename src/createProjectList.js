import project from "./classes/project.js"

/* 
    function takes in an array of all projects and
    creates an array of objects containing all the projects.
*/

export default function createProjectList(projectArr){
    let projectList = [];
    for(let i = 0; i < projectArr.links.length; i++){
        let p1 = new project;
        p1.changeLink(projectArr.links[i]);
        // p1.readLink();
        p1.changeName([projectArr.names[i]]);
        // p1.readName();
        // console.log(typeof(p1.link));
        p1.changeImgURL([projectArr.img[i]]);
        projectList.push(p1);
    }
    return projectList;
}