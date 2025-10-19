import { useEffect, useState } from "react"

export default function ScoredCard({ label, score, type }) {

    const [isAnimateScore, setIsAnimateScore] = useState(false);

    useEffect(() => {
        console.log(score);
        if(score !== 0){
            console.log('enter');
            setIsAnimateScore(true);
            const timeout = setTimeout(()=> setIsAnimateScore(false), 1000);
            return ()=> clearTimeout(timeout);
        }
    }, [score]);

    return (
        <div className={`score-card ${type}-score`}>
            <div className="score-label"> {label} </div>
            <div className={`score-value ${isAnimateScore ? "animate" : "" }`}> {score} </div>
        </div>
    )
}