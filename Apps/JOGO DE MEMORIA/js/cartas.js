document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector('.grid');
  const resetButton = document.getElementById('resetButton');

  const characters = [
    'Asoka', 'DarthMaul', 'DarthSidius', 'Kyloren', 'lukeskywalker',
    'obiwan', 'r2d2', 'yoda', 'darthvader', 'quigonjinn'
  ];

  let cardsArray = [...characters, ...characters]; // duplicar
  cardsArray = shuffle(cardsArray);

  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const createCard = (character) => {
    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';
    front.style.backgroundImage = `url('imagens/${character}.jpg')`;

    card.setAttribute('data-character', character);

    card.appendChild(front);
    card.appendChild(back);
    grid.appendChild(card);

    card.addEventListener('click', () => {
      if (lockBoard || card.classList.contains('reveal-card') || card.classList.contains('disabled')) return;

      card.classList.add('reveal-card');

      if (!firstCard) {
        firstCard = card;
        return;
      }

      secondCard = card;
      lockBoard = true;

      const isMatch = firstCard.getAttribute('data-character') === secondCard.getAttribute('data-character');

      if (isMatch) {
        disableCards();
      } else {
        unflipCards();
      }
    });
  };

  const disableCards = () => {
    setTimeout(() => {
      firstCard.classList.add('disabled');
      secondCard.classList.add('disabled');
      resetBoard();
      checkEndGame(); // verifica se todas foram desativadas
    }, 800);
  };

  const unflipCards = () => {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');
      resetBoard();
    }, 1000);
  };

  const resetBoard = () => {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  };

  const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.card.disabled');
    if (disabledCards.length === cardsArray.length) {
      resetButton.style.display = 'block';
    }
  };

  resetButton.addEventListener('click', () => {
    window.location.reload();
  });

  cardsArray.forEach(character => createCard(character));
});
