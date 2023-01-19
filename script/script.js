let roundText = document.getElementById("roundText");
let questionMark = document.getElementById("questionMark");
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");
let promptText = document.getElementById("promptText");
const gameButtons = document.querySelectorAll(".gameButtons")
let oneHeartButton = document.getElementById("oneHeartButton");
let threeHeartButton = document.getElementById("threeHeartButton");
let fiveHeartButton = document.getElementById("fiveHeartButton");
const url = 'https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption'
let roundNum = 0;
let apiFetch;
let startNumber;

let playerOneHealth = 0
let playerTwoHealth = 0

async function computerSelect()
{
    
    await fetch(url).then(
        response => response.text()
    ).then(
        data => {
          apiFetch = data
        }
    )
}



function loseHealthP1() {
    let emptyHeart = document.createElement("img")
    emptyHeart.className = "oneHeart";
    emptyHeart.src = "../Assets/pixel.png";
    playerOneHeartInject.innerHTML = "";
    playerOneHeartInject.appendChild(emptyHeart);
}
function loseHealthP2() {
    let emptyHeart2 = document.createElement("img")
    emptyHeart2.className = "oneHeart";
    emptyHeart2.src = "../Assets/pixel.png";
    playerTwoHeartInject.innerHTML = "";
    playerTwoHeartInject.appendChild(emptyHeart2);
}


function battle(playerSelect, computerSelect) {

    switch (true)
    {
    case (playerSelect === computerSelect):
        promptText.innerHTML = "Draw"
        roundText.innerHTML = "Draw round Player 1 choose"
        break;
        
    case (playerSelect === "Scissors" && computerSelect === "Paper"):
    case (playerSelect === "Paper" && computerSelect === "Rock"):
    case (playerSelect === "Rock" && computerSelect === "Lizard"):
    case (playerSelect === "Lizard" && computerSelect === "Spock"):
    case (playerSelect === "Spock" && computerSelect === "Scissors"):
    case (playerSelect === "Scissors" && computerSelect === "Lizard"):
    case (playerSelect === "Lizard" && computerSelect === "Paper"):
    case (playerSelect === "Paper" && computerSelect === "Spock"):
    case (playerSelect === "Spock" && computerSelect === "Rock"):
    case (playerSelect === "Rock" && computerSelect === "Scissors"):
        promptText.innerHTML = "Player 2 wins"
        playerOneHealth -= 1;
        console.log(computerSelect)
        console.log(playerSelect)
        break;
    default:
        promptText.innerHTML = "player 1 wins"
        playerTwoHealth -= 1;
        console.log(computerSelect)
        console.log(playerSelect)
        break;
    }
}
// -----------------------
function healthCheck (playerOneHealth, playerTwoHealth){
    console.log(playerOneHealth)
    console.log(playerTwoHealth)
    switch (playerOneHealth)
    {
        case 0:
            promptText.innerHTML = "Player 2 Wins"
            roundText.innerHTML = "Game Over"
            loseHealthP1()
            alert("Player 2 Wins");
            window.location.reload();
            break;
        default:
            break
    }
    switch (playerTwoHealth)
    {
        case 0:
            promptText.innerHTML = "Player 1 Wins"
            roundText.innerHTML = "Game Over"
            loseHealthP2()
            alert("Player 2 wins")
            window.location.reload();
            break;

        default:
            break;
    }
}

function reset() {
//    questionMark.addEventListener('click', () => {
//       window.location.reload();
//     });
  }

//------------------------
function counter() {
 
    roundNum += 1;
    roundText.innerText = `Round: ${roundNum}`;
    console.log(`round num is ${roundNum}`)
    return roundNum;
   
    
  }

// --------------------------
function game() {
    computerSelect();
    let num = window.prompt("Enter Number of Rounds")
    
    playerOneHealth = num
    playerTwoHealth = num 
    let playerSelect;
    
   gameButtons.forEach((weapon) =>
    {
        weapon.addEventListener("click", () => 
        {
            if (weapon.classList.contains('stone'))
             {
                playerSelect = "Rock"
                computerSelect();
            }
            else if (weapon.classList.contains('paper')) {
                playerSelect = "Paper"
                computerSelect();
            }
            else if (weapon.classList.contains('scissors')) {
                playerSelect = "Scissors"
                computerSelect();
            }
            else if (weapon.classList.contains('lizard')) {
                playerSelect = "Lizard"
                computerSelect();
            }
            else if (weapon.classList.contains('spock')) {
                playerSelect = "Spock"
                computerSelect();
            }
           
            battle(playerSelect, apiFetch)
            counter();
            healthCheck(playerOneHealth, playerTwoHealth)
            reset();
        })
    })
}


function PVPgame(num) {
    computerSelect();
    playerOneHealth = num
    playerTwoHealth = num 
    let playerSelect;
    let player2Select;
   gameButtons.forEach((weapon) =>
    {
        weapon.addEventListener("click", () => 
        {
            if (weapon.classList.contains('stone'))
             {
               

            }
            else if (weapon.classList.contains('paper')) {
                playerSelect = "Paper"
                computerSelect();
            }
            else if (weapon.classList.contains('scissors')) {
                playerSelect = "Scissors"
                computerSelect();
            }
            else if (weapon.classList.contains('lizard')) {
                playerSelect = "Lizard"
                computerSelect();
            }
            else if (weapon.classList.contains('spock')) {
                playerSelect = "Spock"
                computerSelect();
            }
            console.log(playerSelect)
            battle(playerSelect, apiFetch)
            counter();
            healthCheck(playerOneHealth, playerTwoHealth)
            reset();
        })
    })
}











function ModeSelect(){
   
    
        oneHeartButton.addEventListener("click", function(){
        console.log("One heart button")
        let fullHeart1 = document.createElement("img")
        fullHeart1.className = "oneHeart"
        fullHeart1.src ="../Assets/heart.png"
        playerOneHeartInject.innerHTML = ""
        playerOneHeartInject.appendChild(fullHeart1);
        startNumber = 1
        roundNum = 0;
        roundText.innerHTML = "Round 1"
        promptText.innerHTML = "Player 1 choose"
        
        game(startNumber)
    })
    threeHeartButton.addEventListener("click", function(){
        roundNum = 1
        console.log("three heart button")
        let fullHeart1 = document.createElement("img")
        fullHeart1.className = "oneHeart"
        fullHeart1.src ="../Assets/heart.png"
        playerOneHeartInject.innerHTML = ""
        playerOneHeartInject.appendChild(fullHeart1);
        startNumber = 3
        roundNum = 0;
        roundText.innerHTML = "Round 1"
        promptText.innerHTML = "Player 1 choose"
        game(startNumber)
    })
        fiveHeartButton.addEventListener("click", function(){
        roundNum = 1
        console.log("Five heart button")
        let fullHeart1 = document.createElement("img")
        fullHeart1.className = "oneHeart"
        fullHeart1.src ="../Assets/heart.png"
        playerOneHeartInject.innerHTML = ""
        playerOneHeartInject.appendChild(fullHeart1);
        startNumber = 5
        roundNum = 0;
        roundText.innerHTML = "Round 1"
        promptText.innerHTML = "Player 1 choose"
        game(startNumber)
    })  
}



function pvpCheck() {

    let choice = window.prompt("Enter PVP or AI")
    game()

}


