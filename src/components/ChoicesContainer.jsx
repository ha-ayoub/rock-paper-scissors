import ChoiceButton from "./ChoiceButton";

export default function ChoicesContainer({ choices, onChoiceSelect, disabled }) {
    return (
        <div className="choices-container">
            {choices.map(choice => (
                <ChoiceButton
                    key={choice.id}
                    choice={choice}
                    onClick={onChoiceSelect}
                    disabled={disabled}
                />
            ))}
        </div>
    )
}