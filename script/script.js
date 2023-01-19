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
const url = 'https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption'
let roundNum = 0;



let playerOneHealth = 0
let playerTwoHealth = 0

oneHeartButton.addEventListener("click", function(){
    roundNum = 1
    console.log("One heart button")
    let fullHeart1 = document.createElement("img")
    fullHeart1.className = "oneHeart"
    fullHeart1.src ="../Assets/heart.png"
    playerOneHeartInject.appendChild(fullHeart1);
    


})


async function computerSelect()
{
    let stuff;
    await fetch(url).then(
        response => response.text()
    ).then(
        data => {
          return data
          
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
        promptText.innerHTML = "Player 1 wins"
        playerOneHealth -= 1;
        loseHealthP1()
        break;
    default:
        promptText.innerHTML = "player 2 wins"
        playerTwoHealth -= 1;
        loseHealthP2();
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
            break;
        default:
            console.log("HealthCheck Error")
    }
    switch (playerTwoHealth)
    {
        case 0:
            promptText.innerHTML = "Player 1 Wins"
            roundText.innerHTML = "Game Over"
            loseHealthP2()
            break;
        default:
            console.log("HealthCheck Error")
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
function game(num) {
    playerOneHealth = num
    playerTwoHealth = num 
    let playerSelect;
    let computerSelect = "Rock"
   gameButtons.forEach((weapon) =>
    {
        weapon.addEventListener("click", () => 
        {
            if (weapon.classList.contains('stone')) {
                playerSelect = "Rock"
                
            }
            else if (weapon.classList.contains('paper')) {
                playerSelect = "Paper"
            }
            else if (weapon.classList.contains('scissors')) {
                playerSelect = "Scissors"
            }
            else if (weapon.classList.contains('lizard')) {
                playerSelect = "Lizard"
            }
            else if (weapon.classList.contains('spock')) {
                playerSelect = "Spock"
            }
            console.log(playerSelect)
            battle(playerSelect, computerSelect)
            counter();
            healthCheck(playerOneHealth, playerTwoHealth)
            reset();
        })
    })
}


game(roundNum)



