import { useState } from 'react'
import { CHOICES, RESULT_TYPES } from './utils/constants'
import { getRandomChoice, determineWinner } from './utils/gameLogic'
import GameHeader from './components/GameHeader'
import BattleZone from './components/BattleZone'
import ChoicesContainer from './components/ChoicesContainer'
import ReplayButton from './components/ReplayButton'
import GameRules from './components/GameRules'
import Signature from './components/Signature'

export default function App() {

  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleChoice = (choice) => {

    if (isAnimating) return;

    setGameStarted(true);
    setIsAnimating(true);
    setShowResult(false);
    setPlayerChoice(choice);

    setTimeout(() => {
      const compChoice = getRandomChoice(CHOICES);
      setComputerChoice(compChoice);

      setTimeout(() => {
        const winner = determineWinner(choice, compChoice);
        setResult(winner);
        setShowResult(true);

        if (winner === RESULT_TYPES.PLAYER) {
          setScore(prev => ({ ...prev, player: prev.player + 1 }));
        } else if (winner === RESULT_TYPES.COMPUTER) {
          setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
        }

        setIsAnimating(false);
      }, 500);
    }, 1500);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setShowResult(false);
  };

  return (

    <div className="game-container">
      <div className="game-content">
        <GameHeader score={score} />

        <BattleZone
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
          isAnimating={isAnimating}
          showResult={showResult}
          gameStarted={gameStarted}
        />

        <ChoicesContainer
          choices={CHOICES}
          onChoiceSelect={handleChoice}
          disabled={isAnimating}
        />

        <ReplayButton onClick={resetGame} show={showResult} />

        <GameRules />
        <Signature />
      </div>
    </div>

  )
}

