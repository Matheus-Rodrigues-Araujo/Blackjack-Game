// Points of the Player
let sum = 0

// Array for the cards
let cards = []

// Player Conditions
let hasBlackJack = false
let isAlive = false

// Variable to show the player's situation
let message = ""

// Variables to change the html document using DOM
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")

// Player's Information
let player = {
    name: 'Matheus',
    chips: 200
}

let playerEl = document.getElementById("player-el")

playerEl.textContent = `${player.name}: $${player.chips}`
// Function to get a random card
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

// Function to start the game
function startGame(){
    isAlive = true
    // First and Second Cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Function to show informations about the game to the player
function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i =0; i< cards.length; i++){
        cardsEl.textContent += cards[i] + ' '
    }
    
    sumEl.textContent = `Sum: ${sum}`
    if(sum <=20){
        message = "Do you want to draw a new card ?"
    } else if(sum == 21){
        message = "You've got a Blackjack!"
        hasBlackJack = true
    } else{
        message = "You loose!"
        isAlive = false
    }
    // Displays the message
    messageEl.textContent = message
}

// Condition to check if the player can get a new card
// If it can, the function 'new card()' it's called
if(isAlive && !hasBlackJack){
    newCard()
}

// Function to get a new card
function newCard(){
    if(isAlive && !hasBlackJack){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}
