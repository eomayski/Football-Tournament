import { useSelector } from "react-redux";
import { getWinner } from "../../utils/getWinner.js";

const MatchCard = ({ team1, team2, score1, score2, isFinal = false, fullMatchData = {} }) => {
    const winner = getWinner(fullMatchData.Score)
    const flags = useSelector((state) => state.flags.items);
    

    return (
        <div className={`match-card ${isFinal ? 'final-card' : ''}`}>
            <div className={`match-team ${winner === 1 ? 'winner' : ''}`}>
                <div className="team-info">
                    <div className="team-logo"><img src={flags[team1]} alt={team1.substring(0, 2).toUpperCase()} /></div>
                    <span className="team-name">{team1}</span>
                </div>
                <span className="team-score">{score1}</span>
            </div>
            <div className={`match-team ${winner === 2 ? 'winner' : ''}`}>
                <div className="team-info">
                    <div className="team-logo"><img src={flags[team2]} alt={team2.substring(0, 2).toUpperCase()} /></div>
                    <span className="team-name">{team2}</span>
                </div>
                <span className="team-score">{score2}</span>
            </div>
        </div>
    );
};

export default MatchCard;