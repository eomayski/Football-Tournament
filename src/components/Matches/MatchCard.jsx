import { useSelector } from "react-redux";
import { getWinner } from "../../utils/getWinner.js";

const MatchCard = ({ team1, team2, score1, score2, isFinal = false, fullMatchData = {} }) => {
    const winner = getWinner(fullMatchData.Score);
    const flags = useSelector((state) => state.flags.items);
    const date = fullMatchData.Date ? new Date(fullMatchData.Date).toLocaleDateString('bg-BG', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(' г.', '') : '';


    return (
        <div className={`match-card ${isFinal ? 'final-card' : ''}`}>
            <div className={`match-team ${winner === 1 ? 'winner' : ''}`}>
                <div className="team-logo"><img src={flags[team1]} alt={team1.substring(0, 2).toUpperCase()} /></div>
                <div className="team-name">{team1}</div>
            </div>

            <div className="match-details">
                <div className="match-score">{score1} - {score2}</div>
                {date && <div className="match-date">{date}</div>}
            </div>

            <div className={`match-team ${winner === 2 ? 'winner' : ''}`}>
                <div className="team-logo"><img src={flags[team2]} alt={team2.substring(0, 2).toUpperCase()} /></div>
                <div className="team-name">{team2}</div>
            </div>
        </div>
    );
};

export default MatchCard;