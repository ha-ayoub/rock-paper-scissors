import { CARD } from "../utils/constants";
import ScoredCard from "./ScoredCard";


export default function GameHeader({ score }) {
    return (
        <header className="game-header">
            <h1 className="game-title">
                {`${CARD.ROCK}`} <span className="title-highlight">{`${CARD.PAPER}`}</span> {`${CARD.SCISSORS}`}
            </h1>
            <div className="score-board">
                <ScoredCard label="Player" score={score.player} type="player" />
                <ScoredCard label="Computer" score={score.computer} type="computer" />
            </div>
        </header>
    )
}