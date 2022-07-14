// @ts-nocheck
newGameFunction()


document.querySelector(".rollCube").addEventListener("click",rollCubeFunction)


function rollCubeFunction() {

    if (stopGameCondition) {

        var randomRollNumber = Math.ceil(Math.random()*6)
        var cubePictureSRC = document.querySelector(".cubeImage")
        console.log(cubePictureSRC.src = "images/kostka-" + randomRollNumber + ".png")

        document.querySelector(".cubeImage").style.display = "block"

        roundScore = roundScore + randomRollNumber

        if (randomRollNumber != 1) {
            document.querySelector("#realTimeScore" + activePlayer).textContent = roundScore
        } else if (randomRollNumber == 1) {
            changeGamePlayer()
        }

    }

}




function changeGamePlayer() {
    if (activePlayer == 0) {
        activePlayer = 1
    } else if (activePlayer == 1) {
        activePlayer = 0
    }

    roundScore = 0

    
    document.querySelector("#realTimeScore0").textContent = 0
    document.querySelector("#realTimeScore1").textContent = 0
    
    document.querySelector(".cubeImage").style.display = "none"

    document.querySelector(".playerScore0").classList.toggle("activePlayer")
    document.querySelector(".playerScore1").classList.toggle("activePlayer")


}


document.querySelector(".holdScore").addEventListener("click",holdScoreFunction)
function holdScoreFunction() {
    
    if (stopGameCondition) {

        totalScore[activePlayer] = totalScore[activePlayer] + roundScore
        document.querySelector("#realScoreOfPlayer" + activePlayer).textContent = totalScore[activePlayer];

        if ( totalScore[activePlayer] < 30) {
            changeGamePlayer()
        } else if (totalScore[activePlayer] >= 30) {
            document.querySelector("#realTimeScore" + activePlayer).textContent = "WIN"
            document.querySelector(".cubeImage").style.display = "none"
            stopGameCondition = false
        }

    }


}


document.querySelector(".newGame").addEventListener("click",newGameFunction)
function newGameFunction() {

    stopGameCondition = true

    roundScore = 0
    activePlayer = 0
    totalScore = [0,0]

    document.querySelector("#realScoreOfPlayer0").textContent = 0
    document.querySelector("#realScoreOfPlayer1").textContent = 0

    document.querySelector("#realTimeScore0").textContent = 0
    document.querySelector("#realTimeScore1").textContent = 0

    document.querySelector(".cubeImage").style.display = "none"

    document.querySelector(".playerScore0").classList.add("activePlayer")
    document.querySelector(".playerScore1").classList.remove("activePlayer")
}
































