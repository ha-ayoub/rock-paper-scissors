export default function ResultDisplay({ result }) {
    const resultConfig = {
        player: { text: 'VICTORY!', className: 'win' },
        computer: { text: 'DEFEAT!', className: 'lose' },
        draw: { text: 'EQUALITY!', className: 'draw' }
    };

    const config = resultConfig[result];
    
    if (!config) return null;

    return (
        <div className="result-display">
            <div className={`result-text ${config.className}`}>
                {config.text}
            </div>
        </div>
    )
}