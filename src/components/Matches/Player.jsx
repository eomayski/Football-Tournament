import styles from './Player.module.css';



const Player = ({ player, position, className, players, teamColor }) => {

    const starterName = players[player[0].PlayerID].FullName
    const subName = player.length > 1 ? players[player[1].PlayerID].FullName : ""
    const isOut = (player[0].toMinutes !== 'NULL' && player[0].toMinutes !== '90' && !subName)

    const iconStyle = position !== 'GK' ? teamColor : "";

    return (
        <div className={`${styles.pos} ${className ? styles[className] : ''} ${position === 'GK' ? styles.gk : ''}`}>

            <div className={`${styles.label} ${styles.topLabel}`}>{subName && <i className="fa-solid fa-down-long"></i>}{isOut && <i className="fa-solid fa-square"></i>} {starterName}</div>

            <i
                className={`fa-solid fa-shirt ${styles.shirtIcon} ${styles[iconStyle]}`}
            ></i>

            {subName && <div className={`${styles.label} ${styles.bottomLabel}`}><i className="fa-solid fa-up-long"></i>{subName}</div>}
        </div>
    );
};

export default Player