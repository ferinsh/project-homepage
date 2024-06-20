// function to display all projects on homepage

export default function displayProjectList(projList){
    // console.log(projList);
    let projectWin = document.querySelector("#projectWin");
    //console.log(projectWin);
    
    projectWin.innerHTML = '';
    for(let i = 0; i < projList.length; i++){
        let projectCardHolder = document.createElement("div");
        
        //adds css class to all the project cards
        projectCardHolder.classList.add("projectCard");
        
        //adds event listener to open the project website
        projectCardHolder.addEventListener('click', () => {
            window.open(projList[i].link, "");
        })

        // tries to add a right click menu of url to the divs - FAILURE
        projectCardHolder.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent default context menu
            window.location.href = projList[i].link; // Navigate to the URL from projList[i].link
            return false; // Ensure propagation is stopped
        });
        
        //adds images to the projects - MUST CONVERT TO ASYNC
        // let projLogo = document.createElement("img");
        // projLogo.src = `${projList[i].img}`;

        // projectCardHolder.appendChild(projLogo);

        // uses async to load project images
        let projLogo = new Image();
        projLogo.onload = function() {
            projectCardHolder.appendChild(projLogo);
            projectWin.appendChild(projectCardHolder);
        };
        projLogo.onerror = function() {
            console.error(`Error loading image ${projList[i].img}`);
        };
        projLogo.src = projList[i].img;
        
        
        projectWin.appendChild(projectCardHolder);
    }
    // console.log(projList);
    // console.log(projList.length)
}

