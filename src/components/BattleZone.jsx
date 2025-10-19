import ChoiceDisplay from "./ChoiceDisplay";
import ResultDisplay from "./ResultDisplay";

export default function BattleZone({ playerChoice, computerChoice, result, isAnimating, showResult, gameStarted }) {

    if (!gameStarted) {
        return (
            <div className="start-message">
                <p>Choose your weapon to begin</p>
            </div>
        );
    }
    return (
        <div className="battle-zone">
            <ChoiceDisplay choice={playerChoice} label="YOUR CHOICE" isAnimating={isAnimating} />
            {showResult && <ResultDisplay result={result} />}
            <ChoiceDisplay choice={computerChoice} label="COMPUTER" isAnimating={isAnimating} />
        </div>
    )
}