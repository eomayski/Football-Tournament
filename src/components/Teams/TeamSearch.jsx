import { useState, useRef, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "../../hooks/useDebounce";
import styles from "./TeamSearch.module.css";

// Helper function to map positions
const mapPosition = (pos) => {
    if (!pos) return '';
    const p = pos.trim().toUpperCase();

    if (p === 'GK') return 'GF';
    if (['CB', 'RB', 'LB', 'RWB'].includes(p)) return 'DF';
    if (['CM', 'CDM', 'CAM', 'RM', 'LM', 'LWB'].includes(p)) return 'MD';
    if (['ST', 'CF', 'RF', 'LF', 'RW', 'LW'].includes(p)) return 'FW';

    return p;
};


export default function TeamSearch() {
    const { teams, players } = useSelector(state => state.tournament);
    const flags = useSelector((state) => state.flags.items);

    const [searchInput, setSearchInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    const [chosenTeam, setChosenTeam] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: 'TeamNumber', direction: 'asc' });

    const debouncedSearch = useDebounce(searchInput);
    const isSearching = searchInput !== debouncedSearch;

    // 1. Filter teams for the dropdown
    const filteredTeams = useMemo(() => {
        if (!teams) return [];
        const data = Array.isArray(teams) ? teams : Object.values(teams);

        if (!debouncedSearch || debouncedSearch.trim() === "") {
            return data;
        }

        return data.filter((team) => {
            const teamName = team.Name;
            return teamName.toLowerCase().includes(debouncedSearch.toLowerCase());
        });
    }, [teams, debouncedSearch]);

    // 2. Logic to display and sort the chosen team's roster
    const displayPlayers = useMemo(() => {
        if (!chosenTeam || !players) return [];

        const playersArray = Array.isArray(players) ? players : Object.values(players);

        let teamPlayers = playersArray.filter(
            (p) => String(p.TeamID) === String(chosenTeam.ID)
        );

        teamPlayers = teamPlayers.map((p) => ({
            ...p,
            MappedPosition: mapPosition(p.Position)
        }));

        teamPlayers.sort((a, b) => {
            let valA = a[sortConfig.key];
            let valB = b[sortConfig.key];

            // 1. Сортиране на числа (например TeamNumber)
            if (sortConfig.key === 'TeamNumber') {
                valA = parseInt(valA, 10) || 0;
                valB = parseInt(valB, 10) || 0;

                return sortConfig.direction === 'asc' ? valA - valB : valB - valA;
            }

            // 2. Сортиране на текст (имена, позиции и др.) с localeCompare
            valA = String(valA || '');
            valB = String(valB || '');

            // Използваме localeCompare, като задаваме 'base' чувствителност, 
            // за да игнорира главни/малки букви автоматично.
            const compareResult = valA.localeCompare(valB, undefined, { sensitivity: 'base' });

            return sortConfig.direction === 'asc' ? compareResult : -compareResult;
        });

        return teamPlayers;
    }, [chosenTeam, players, sortConfig]);

    const handleSelect = (team) => {
        setSearchInput("");
        setChosenTeam(team);
        setIsOpen(false);
    };

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    
    return (
        <div className={styles.container}>

            {/* SEARCH SECTION */}
            <div className={styles.searchSection} ref={wrapperRef}>
                <label className={styles.label}>
                    Choose Team:
                </label>

                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Search team..."
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                            setIsOpen(true);
                        }}
                        onFocus={() => setIsOpen(true)}
                        autoComplete="off"
                    />

                    {isOpen && (
                        <ul className={styles.dropdown}>
                            {isSearching ? (
                                <li className={styles.message}>Searching...</li>
                            ) : filteredTeams.length > 0 ? (
                                filteredTeams.map((team) => {
                                    const teamId = team.ID;
                                    const teamName = team.Name;

                                    return (
                                        <li
                                            key={teamId}
                                            onClick={() => handleSelect(team)}
                                            className={styles.listItem}
                                        >
                                            <div className="team-logo"><img src={flags[teamName]} alt={teamName.substring(0, 2).toUpperCase()} /></div>
                                            <span>{teamName}</span>
                                        </li>
                                    );
                                })
                            ) : (
                                <li className={styles.message}>No teams found!</li>
                            )}
                        </ul>
                    )}
                </div>
            </div>

            
            {/* PLAYER ROSTER TABLE */}
            {chosenTeam && (
                <div key={chosenTeam.ID} className={styles.tableWrapper}>
                    <div className={styles.tableHeader}>
                        <h2 className={styles.teamName}>
                            Team: {chosenTeam.Name}
                        </h2>
                        <div className="team-logo"><img src={flags[chosenTeam.Name]} alt={chosenTeam.Name.substring(0, 2).toUpperCase()} /></div>
                        <p className={styles.manager}>Manager: {chosenTeam.ManagerFullName}</p>
                    </div>

                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th
                                    className={`${styles.th} ${styles.colNumber}`}
                                    onClick={() => handleSort('TeamNumber')}
                                >
                                    Number {sortConfig.key === 'TeamNumber' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                                </th>
                                <th
                                    className={`${styles.th} ${styles.colName}`}
                                    onClick={() => handleSort('FullName')}
                                >
                                    Name {sortConfig.key === 'FullName' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                                </th>
                                <th
                                    className={`${styles.th} ${styles.colPosition}`}
                                    onClick={() => handleSort('MappedPosition')}
                                >
                                    Position {sortConfig.key === 'MappedPosition' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayPlayers.length > 0 ? (
                                displayPlayers.map((player) => (
                                    <tr key={player.ID} className={styles.tr}>
                                        <td className={`${styles.td} ${styles.colNumber}`}>
                                            {player.TeamNumber}
                                        </td>
                                        <td className={`${styles.td} ${styles.colName}`}>
                                            {player.FullName}
                                        </td>
                                        <td className={`${styles.td} ${styles.colPosition} ${styles[`pos${player.MappedPosition}`]}`}>
                                            {player.MappedPosition}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3" className={styles.td} style={{ textAlign: 'center', padding: '2rem' }}>
                                        No players found for this team.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

        </div>
    );
}