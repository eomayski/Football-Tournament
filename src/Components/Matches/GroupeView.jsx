import { useMemo } from "react";
import MatchCard from "./MatchCard.jsx";
import { Link } from "react-router";

const GroupStage = ({ groupStageMatches = [], teams = {} }) => {
    const groupNames = useMemo(() => {
        const uniqueGroups = [
            ...new Set(Object.values(teams).map((team) => team.Group))
        ];

        return uniqueGroups.filter(Boolean).sort();
    }, [teams]);

    return (
        <div className="group-stage-wrapper">
            {groupNames.map((groupName) => {
                const matchesInGroup = groupStageMatches.filter(match => {
                    const team = teams[match.ATeamID];
                    return team && team.Group === groupName;
                });

                return (
                    <div
                        key={groupName}
                        className="bracket-column"
                    >
                        <h2 className="column-title">Група {groupName}</h2>

                        <div className="bracket-matches">
                            {matchesInGroup.map((match) => {
                                const scoreParts = match.Score.split('-');
                                const s1 = scoreParts[0] || "0";
                                const s2 = scoreParts[1] || "0";

                                return (
                                    <Link key={match.ID} to={`/matches/${match.ID}`}>
                                        <MatchCard
                                            key={match.ID}
                                            team1={teams[match.ATeamID]?.Name || `Team ${match.ATeamID}`}
                                            team2={teams[match.BTeamID]?.Name || `Team ${match.BTeamID}`}
                                            score1={s1}
                                            score2={s2}
                                            date={match.Date}
                                            fullMatchData={match}
                                        />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default GroupStage;