export default function ReplayButton({ onClick, show }) {

    if (!show) return null;
    return (
        <div className="replay-container">
            <button onClick={onClick} className="replay-button">
                Replay
            </button>
        </div>
    )
}