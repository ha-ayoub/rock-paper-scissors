export default function ScoredCard({ label, score, type }) {
    return (
        <div className={`score-card ${type}-score`}>
            <div className="score-label"> {label} </div>
            <div className="score-value"> {score} </div>
        </div>
    )
}