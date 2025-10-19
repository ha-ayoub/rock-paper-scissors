export default function ChoiceButton({ choice, onClick, disabled }) {
    return (
        <button
            onClick={() => onClick(choice)}
            disabled={disabled}
            className={`choice-button ${choice.color}`}
            aria-label={`Choisir ${choice.name}`}
        >
            <div className="button-overlay"></div>
            <div className="button-emoji">{choice.emoji}</div>
            <div className="button-name">{choice.name}</div>
        </button>
    )
}