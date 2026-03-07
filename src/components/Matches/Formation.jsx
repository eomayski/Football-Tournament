import styles from './Formation.module.css';
import Player from './Player.jsx';

// 1. Players by quantity on position 
const formationRules = {
    FW: {
        1: ['ST'],
        2: ['LF', 'RF'],
        3: ['LF', 'RF', 'ST'],
        4: ['LF', 'RF', 'LW', 'RW'],
        5: ['LF', 'RF', 'LW', 'RW', 'ST'],
        6: ['LF', 'RF', 'LW', 'RW', 'ST', 'CF']
    },
    MF: {
        1: ['CM'],
        2: ['LM', 'RM'],
        3: ['LM', 'RM', 'CM'],
        4: ['LM', 'RM', 'CM', 'CAM'],
        5: ['LM', 'RM', 'CM', 'CAM', 'CDM']
    },
    DF: {
        1: ['CB'],
        2: ['LB', 'RB'],
        3: ['LB', 'RB', 'CB'],
        4: ['LB', 'RB', 'LWB', 'RWB'],
        5: ['LB', 'RB', 'LWB', 'RWB', 'CB']
    }
};

// 2. Column by position
const getSide = (pos) => {
    if (['LW', 'LF', 'LM', 'LWB', 'LB'].includes(pos)) return 'left';
    if (['RW', 'RF', 'RM', 'RWB', 'RB'].includes(pos)) return 'right';
    return 'center';
};

// 3. Position assignment function
const assignPositions = (playersArr, category) => {
    const positions = formationRules[category][playersArr.length] || [];
    return playersArr.map((playerGroup, index) => ({
        playerData: playerGroup,
        position: positions[index] || 'UNKNOWN' // Взимаме точната позиция от масива с правила
    }));
};

const Formation = ({ teamPlayers, players, side, teamColor }) => {

    const starts = teamPlayers.filter(p => Number(p.fromMinutes) === 0)
    const substitutes = teamPlayers.filter(p => Number(p.fromMinutes) !== 0)
    const startsArr = []
    
    for (const p of starts) {
        const arr = []
        arr.push(p)
        
        if (p.toMinutes !== 'NULL' && p.toMinutes !== '90') {
            const index = substitutes.findIndex(sub => sub.fromMinutes === p.toMinutes)
            if (index !== -1) {
                const sub = substitutes.splice(index, 1) 
                arr.push(sub[0])
            }
        }
        startsArr.push(arr)
    }
    
    // Filter players positions
    const forwardsRaw = startsArr.filter(p => players[p[0].PlayerID].Position === 'FW');
    const midfieldersRaw = startsArr.filter(p => players[p[0].PlayerID].Position === 'MF');    
    const defendersRaw = startsArr.filter(p => players[p[0].PlayerID].Position === 'DF');
    const goalkeeper = startsArr.filter(p => players[p[0].PlayerID].Position === 'GK');
    
    // Position assignment
    const forwards = assignPositions(forwardsRaw, 'FW');
    const midfielders = assignPositions(midfieldersRaw, 'MF');
    const defenders = assignPositions(defendersRaw, 'DF');

    return (
        <div className={`${styles.footballPitch}`}>

            {/* --- FORWARDS --- */}
            <div className={`${styles.category} ${styles.forwards}`}>
                <div className={`${styles.colSide} ${styles.leftWing}`}>
                    {forwards.filter(p => getSide(p.position) === 'left').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
                <div className={styles.colCenter}>
                    {forwards.filter(p => getSide(p.position) === 'center').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
                <div className={`${styles.colSide} ${styles.rightWing}`}>
                    {forwards.filter(p => getSide(p.position) === 'right').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
            </div>

            {/* --- MIDFIELDERS --- */}
            <div className={`${styles.category} ${styles.midfielders}`}>
                <div className={`${styles.colSide} ${styles.leftWing}`}>
                    {midfielders.filter(p => getSide(p.position) === 'left').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
                <div className={styles.colCenter}>
                    {midfielders.filter(p => getSide(p.position) === 'center').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
                <div className={`${styles.colSide} ${styles.rightWing}`}>
                    {midfielders.filter(p => getSide(p.position) === 'right').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
            </div>

            {/* --- DEFENDERS --- */}
            <div className={`${styles.category} ${styles.defenders}`}>
                <div className={`${styles.colSide} ${styles.defenseSide} ${styles.defenseSideLeft}`}>
                    {defenders.filter(p => getSide(p.position) === 'left').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
                <div className={styles.colCenter}>
                    {defenders.filter(p => getSide(p.position) === 'center').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
                <div className={`${styles.colSide} ${styles.defenseSide} ${styles.defenseSideRight}`}>
                    {defenders.filter(p => getSide(p.position) === 'right').map((p) => (
                        <Player key={p.playerData[0].PlayerID} side={side} player={p.playerData} position={p.position} className={p.position.toLowerCase()} players={players} teamColor={teamColor} />
                    ))}
                </div>
            </div>

            {/* --- GOALKEEPER --- */}
            <div className={`${styles.category} ${styles.goalkeeper}`}>
                <div className={styles.colCenter}>
                    {goalkeeper.map(p => (
                        <Player key={p[0].PlayerID} player={p} position="GK" className="gk" players={players} teamColor={teamColor} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Formation;