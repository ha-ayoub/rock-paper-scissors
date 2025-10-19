export default function ChoiceDisplay({ choice, label, isAnimating }) {
    if (!choice) return null;

    return (
        <div className="choice-display">
            <p className="choice-label">{label}</p>
            <div className={`choice-circle ${choice.color} ${isAnimating ? 'animating' : 'pulse'}`}>
                <div className="choice-emoji">{choice.emoji}</div>
            </div>
        </div>
    )
}