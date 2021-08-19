document.querySelector('.choice__btn').addEventListener('click', () => {


  const field = document.querySelector('.container')
  field.classList.add('clear')


  const table = document.createElement('div');
  table.className = 'table';
  document.body.append(table);
  const game = document.querySelector('.table');

  function getCards(a) {
    for(let i=1; i<=a; i++) {
      let div = document.createElement('div');
      div.className = 'card';
      game.appendChild(div);
    }
  }

  function getCovers() {
    let cards = document.querySelectorAll('.card');
    cards.forEach(function(card, index) {
      let cover = document.createElement('div');
      cover.className = 'cover';
      card.append(cover);
    })
  }

  function openCard() {
    let cards = document.querySelectorAll('.card');
    let random = Math.floor(Math.random() * cards.length);
    let bug = cards[random];

    let cardFlipped = false;

    for (let i = 0; i < cards.length; i++) {
      function rotate() {
        if (cards[i] == bug) {
          cards[i].classList.add('bug');
        } else {
            cards[i].classList.add('gameOver');
        }
      }

      cards[i].addEventListener('click', () => {
        if (cardFlipped == true) {
          window.location.reload();
        } else {
            rotate();
            cardFlipped = true;
        }
      })
    }
  }

  const levels = document.querySelectorAll('.choice__radio');
  for (let i=0; i < levels.length; i++) {
    if (levels[i].checked) {
      let value = levels[i].value;

      if (value === 'easy') {
        getCards(3);
        game.classList.add('table3Cards');
      }

      if (value === 'medium') {
        getCards(6);
        game.classList.add('table6Cards');
      }

      if (value === 'hard') {
        getCards(10);
        game.classList.add('table10Cards');
      }

    getCovers();
    openCard();
    }
  }
})
