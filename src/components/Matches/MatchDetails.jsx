import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MatchCard from "./MatchCard.jsx";
import Formation from "./Formation.jsx";

export default function MatchDetails() {
    const { matchId } = useParams()
    const { matches, players, records, teams } = useSelector(state => state.tournament);

    const match = matches[matchId];
    const [s1, s2] = match.Score.split('-');
    const matchPlayers = Object.values(records).filter(p => p.MatchID === matchId)
    const teamAPlayers = matchPlayers.filter(p => players[p.PlayerID].TeamID === match.ATeamID)
    const teamBPlayers = matchPlayers.filter(p => players[p.PlayerID].TeamID === match.BTeamID)
    

    return (
        <>
            <section className="top-match">
                            <MatchCard
                                key={match.ID}
                                team1={teams[match.ATeamID]?.Name || `Team ${match.ATeamID}`}
                                score1={s1}
                                team2={teams[match.BTeamID]?.Name || `Team ${match.BTeamID}`}
                                score2={s2}
                                fullMatchData={match}
                            />
                            
            </section>
            <section className="formations-container">
            <Formation teamPlayers={teamAPlayers} players={players} teamColor={'red'}/>
            <Formation teamPlayers={teamBPlayers} players={players} teamColor={'blue'}/>

            </section>
        </>
    );
}