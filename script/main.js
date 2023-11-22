document.addEventListener("keydown",(e)=>{
    let key = e.key;

    if (key == "ArrowLeft" || key == "KeyA") {
        e.preventDefault();
        move(-1,0);
    } 
    if (key == "ArrowUp" || key == "KeyW") {
        e.preventDefault();
        move(0,1);
    } 
    if (key == "ArrowRight" || key == "KeyD") {
        e.preventDefault();
        move(1,0);
    } 
    if (key == "ArrowDown" || key == "KeyS") {
        e.preventDefault();
        move(0,-1);
    }
});

const worldTiles = {
    "0,0": "homepage",
    "0,1": "importantInfo",
    "0,-1": "registration",
    "-1,1": "grassland1",
    "-1,0": "socials",
    "-1,-1": "portal",
    "1,1": "pageOfThePeople",
    "1,0": "plannedActivities",
    "1,-1": "grassland2"
}

x = 0, y = 0 

function move(addX,addY) {
    if (worldTiles[`${x+addX},${y+addY}`]) {
        let elem1 = document.getElementById(worldTiles[`${x},${y}`]);
        x += addX; 
        y += addY;
        let elem2 = document.getElementById(worldTiles[`${x},${y}`]);
        elem1.style.display = "none";
        elem2.style.display = "block"; 
    }
    else {
        window.alert("You cannot move like that!")
    }
}