console.log("Script Loaded - Players Page"); 

let playerList = [];
let playerIndex = 0;

// Function to Attach the Player Details
function createPlayerCard(obj) {
    let pImage = document.getElementById('p-image');
    pImage.src = obj.imageUrl;

    let pName = document.getElementById('p-name');
    pName.innerHTML = obj.name;

    let pteam = document.getElementById('p-team');
    pteam.innerHTML = obj.team;

    let pRole =  document.getElementById('p-role');
    pRole.innerHTML = obj.role;

    let pDob =  document.getElementById('p-dob');
    pDob.innerHTML = obj.dob;
    
    let pRating =  document.getElementById('p-rating');
    pRating.innerHTML = obj.rating;
}


// Fetching data from the server - All at Once
const playerUrl = "http://localhost:3000/players";
var http = new XMLHttpRequest(); 
http.open("GET", playerUrl, true);
http.onreadystatechange = function() {
    if(this.readyState === 4 ) {
        // console.log(JSON.parse(this.responseText));
        playerList =  JSON.parse(this.responseText);
        console.log(playerList)
        createPlayerCard(playerList[0]);
    }
}
http.send();


let nextButton = document.getElementById('btn-next');
nextButton.onclick = function() {
    // console.log("Before",playerIndex); 
    if ((playerIndex < playerList.length-1)) {
        playerIndex += 1;
        createPlayerCard(playerList[playerIndex]);
    } else {
        // nextButton.classList.add('disable') 
        alert('You have reached the end. Go to Homepage or Press Back Button');
    }
    // console.log("After",playerIndex);
}

let backButton = document.getElementById('btn-back'); 
backButton.onclick = function() {
    // console.log("Before Back",playerIndex); 
    if ((playerIndex > 0 )) {
        playerIndex -= 1; 
        createPlayerCard(playerList[playerIndex]);
    } else {
        // backButton.classList.add('disable');
        alert('You have reached the end. Go to Homepage or Press Next Button');
    }
    // console.log("After Back",playerIndex);
}