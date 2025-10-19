export const CARD = {
    ROCK: 'Rock',
    PAPER: 'Paper',
    SCISSORS: 'Scissors'
};

export const CHOICES = [
  { id: `${CARD.ROCK.toLowerCase()}`, name: `${CARD.ROCK}`, emoji: '✊', color: 'blue' },
  { id: `${CARD.PAPER.toLowerCase()}`, name: `${CARD.PAPER}`, emoji: '✋', color: 'purple' },
  { id: `${CARD.SCISSORS.toLowerCase()}`, name: `${CARD.SCISSORS}`, emoji: '✌️', color: 'green' }
];

export const RESULT_TYPES = {
  PLAYER: 'player',
  COMPUTER: 'computer',
  DRAW: 'draw'
};

export const WIN_CONDITIONS = {
    rock: `${CARD.SCISSORS.toLowerCase()}`,
    paper: `${CARD.ROCK.toLowerCase()}`,
    scissors: `${CARD.PAPER.toLowerCase()}`
};
