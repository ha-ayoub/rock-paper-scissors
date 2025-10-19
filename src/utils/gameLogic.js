import { RESULT_TYPES, WIN_CONDITIONS } from './constants'

export const getRandomChoice = (choices) => {
    return choices[Math.floor(Math.random() * choices.length)]
}

export const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice.id === computerChoice.id)
        return RESULT_TYPES.DRAW;

    return WIN_CONDITIONS[playerChoice.id] === computerChoice.id ? RESULT_TYPES.PLAYER : RESULT_TYPES.COMPUTER;

}