export default function displayProjectList(projList){
    console.log(projList);
    let projectWin = document.querySelector("#projectWin");
    //console.log(projectWin);
    
    projectWin.innerHTML = '';
    for(let i = 0; i < projList.length; i++){
        let projectCardHolder = document.createElement("div");
        // console.log(projectCardNew);
        projectCardHolder.classList.add("projectCard");
        // console.log(projectCardNew);
        projectCardHolder.addEventListener('click', () => {
            window.open(projList[i].link, "");
        })
        projectCardHolder.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent default context menu
            window.location.href = projList[i].link; // Navigate to the URL from projList[i].link
            return false; // Ensure propagation is stopped
        });

        // console.log(projectCardNew);
        // console.log(typeof(projectCardNew));
        projectWin.appendChild(projectCardHolder);
    }
    console.log(projList);
    console.log(projList.length)
}

// function appendProjCard(projWin, projCard){
//     projWin.appendChild(projCard);
//     console.log(projWin);
//     console.log(projCard);
    
// }