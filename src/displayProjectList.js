export default function displayProjectList(projList){
    console.log(projList);
    let projectWin = document.querySelector("#projectWin");
    //console.log(projectWin);
    
    projectWin.innerHTML = '';
    for(let i = 0; i < projList.length; i++){
        let projectCardHolder = document.createElement("div");
        
        projectCardHolder.classList.add("projectCard");
        
        projectCardHolder.addEventListener('click', () => {
            window.open(projList[i].link, "");
        })
        projectCardHolder.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent default context menu
            window.location.href = projList[i].link; // Navigate to the URL from projList[i].link
            return false; // Ensure propagation is stopped
        });
        
        let projLogo = document.createElement("img");
        projLogo.src = `${projList[i].img}`;

        projectCardHolder.appendChild(projLogo);
        
        
        projectWin.appendChild(projectCardHolder);
    }
    console.log(projList);
    console.log(projList.length)
}

