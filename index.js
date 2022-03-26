let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
// console.log(messageEl)

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

function startGame(){
    isAlive = true
    // First and Second Cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

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
    } else{
        message = "You loose!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    let newCard = getRandomCard()
    cards.push(newCard)
    sum = sum + newCard
    renderGame()
}