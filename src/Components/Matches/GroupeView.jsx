import MatchCard from "./MatchCard.jsx";

const GroupStage = () => {

  const groups = ['A', 'B', 'C', 'D', 'E', 'F'];

  const dummyMatches = [
    { id: 1, team1: "Отбор 1", score1: 2, team2: "Отбор 2", score2: 1 },
    { id: 2, team1: "Отбор 3", score1: 0, team2: "Отбор 4", score2: 0 },
    { id: 3, team1: "Отбор 1", score1: 3, team2: "Отбор 3", score2: 1 },
    { id: 4, team1: "Отбор 2", score1: 1, team2: "Отбор 4", score2: 2 },
    { id: 5, team1: "Отбор 4", score1: 0, team2: "Отбор 1", score2: 2 },
    { id: 6, team1: "Отбор 2", score1: 2, team2: "Отбор 3", score2: 2 },
  ];

  return (
      <div 
        className="bracket-container" 
        style={{ gap: '1.5rem', minWidth: '1600px' }}
      >
        
        {groups.map((groupName) => (
          <div 
            key={groupName} 
            className="bracket-column" 
            style={{ justifyContent: 'flex-start', gap: '1rem' }}
          >
            <h2 className="column-title">Група {groupName}</h2>
            
            {dummyMatches.map((match) => (
              <MatchCard 
                key={`${groupName}-${match.id}`}
                team1={`${match.team1} (${groupName})`} 
                team2={`${match.team2} (${groupName})`}
                score1={match.score1}
                score2={match.score2}
              />
            ))}
            
          </div>
        ))}

      </div>
  );
};

export default GroupStage;