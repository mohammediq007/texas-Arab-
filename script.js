
let playerHand = [];
let opponentHand = [];
let communityCards = [];
let pot = 0;
let playerChips = 1000;
let opponentChips = 1000;

function dealCards() {
  const suits = ['h', 'd', 'c', 's'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
  const deck = [];

  for (let s of suits) {
    for (let v of values) {
      deck.push(v + s);
    }
  }

  deck.sort(() => Math.random() - 0.5);
  playerHand = [deck.pop(), deck.pop()];
  opponentHand = [deck.pop(), deck.pop()];
  communityCards = [deck.pop(), deck.pop(), deck.pop(), deck.pop(), deck.pop()];
  renderCards();
}


function renderCards() {
  const playerDiv = document.getElementById("player-cards");
  const opponentDiv = document.getElementById("opponent-cards");
  const communityDiv = document.getElementById("community-cards");

  playerDiv.innerHTML = playerHand.map(c => `<div class="card" style="background-image:url('../images/cards/${c}.png')"></div>`).join('');
  opponentDiv.innerHTML = opponentHand.map(c => `<div class="card" style="background-image:url('../images/cards/${c}.png')"></div>`).join('');
  communityDiv.innerHTML = communityCards.map(c => `<div class="card" style="background-image:url('../images/cards/${c}.png')"></div>`).join('');
}
</div>`).join('');
  opponentDiv.innerHTML = opponentHand.map(c => `<div class="card">${c}</div>`).join('');
  communityDiv.innerHTML = communityCards.map(c => `<div class="card">${c}</div>`).join('');
}

function playerAction(type) {
  if (type === "raise") pot += 100;
  else if (type === "call") pot += 50;
  else if (type === "fold") pot = 0;

  document.getElementById("pot-display").textContent = "Pot: $" + pot;
}

function resetGame() {
  pot = 0;
  playerChips = 1000;
  opponentChips = 1000;
  dealCards();
  document.getElementById("pot-display").textContent = "Pot: $0";
  document.getElementById("chips-display").textContent = "Your Chips: $1000 | Bot Chips: $1000";
  document.getElementById("player-hand-info").textContent = "";
  document.getElementById("opponent-hand-info").textContent = "";
}

window.onload = () => {
  dealCards();
};
