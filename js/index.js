let deck = []; // Global deck variable
const suits = ['hearts', 'spades', 'diamonds', 'clubs']; // Global suits constant
const cardsContainer = document.querySelector('.cards-wrapper'); // Card container constant

const renderCards = (cards) => {
  cards.forEach((card, i) => {
    const positionFromLeft = i * 24;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsContainer.append(cardElement);
  });
};

const createCards = () => {
  const cards = [];
  suits.map((suit) => { // Mapping over global suits array
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit,
      };
      cards.push(cardObject); // appending instances of each cardObj to the local cards array
    }
    return suit;
  });
  renderCards(cards); // Rendering cards using render function
  deck = [...cards]; // Setting Global deck variable to the newly dealt local cards array
  return cards;
};

const toggleCards = () => {
  cardsContainer.classList.toggle('hidden');
};

const shuffledeck = () => {
  cardsContainer.innerHTML = ''; // Removing existing card elements from the DOM using global card container variable
  const cards = [...deck]; // Setting cards from the global deck variable
  cards.sort(() => 0.5 - Math.random()); // Randomly assorting the the order of the cards []
  renderCards(cards); // Rendering cards using render function
  deck = [...cards]; // Setting the global deck variable equal to the newly shuffled cards array
};

const magic = () => {
  cardsContainer.innerHTML = ''; // Removing existing card elements from the DOM using global card container variable
  const cards = []; // Setting cards from the global deck variable

  suits.map((suit) => { // Mapping over global suits array
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit,
      };
      cards.push(cardObject); // appending instances of each cardObj to the local cards array
    }
    return suit;
  });
  renderCards(cards); // Rendering cards using render function
  deck = [...cards]; // Setting the global deck variable equal to the newly shuffled cards array
};

function createButtons() {
  // Button to Reset the deck
  const Reset = document.createElement('button');
  Reset.className = 'btn btn-lg btn-danger resetBtn';
  Reset.textContent = 'Reset';
  // Button to Shuffle the deck
  const Shuffle = document.createElement('button');
  Shuffle.className = 'btn btn-lg btn-secondary';
  Shuffle.textContent = 'Shuffle';
  Shuffle.addEventListener('click', shuffledeck);
  // Button to Show&Hide
  const ShowHide = document.createElement('button');
  ShowHide.className = 'btn btn-lg btn-secondary';
  ShowHide.id = 'showHide';
  ShowHide.addEventListener('click', toggleCards);
  ShowHide.textContent = 'Show/Hide';
  // Button to create some magic
  const Magic = document.createElement('button');
  Magic.className = 'btn btn-lg btn-secondary';
  Magic.textContent = 'Magic';
  Magic.addEventListener('click', magic);
  // Appending buttons
  const wrapper = document.querySelector('.btn-wrapper');
  wrapper.appendChild(Shuffle);
  wrapper.appendChild(ShowHide);
  wrapper.appendChild(Magic);
  wrapper.appendChild(Reset);
  // Removing start button
  const startBtn = document.querySelector('#start-game');
  wrapper.removeChild(startBtn);

  // Function to reset the game to its inital state
  const resetButtons = () => {
    wrapper.removeChild(Shuffle);
    wrapper.removeChild(ShowHide);
    wrapper.removeChild(Magic);
    wrapper.removeChild(Reset);
    wrapper.appendChild(startBtn);

    cardsContainer.innerHTML = '';
  };

  Reset.addEventListener('click', resetButtons);
}

// Function to clear oufunctione game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
