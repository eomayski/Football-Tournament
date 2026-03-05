import { useSelector } from "react-redux";
import FileUploader from "../FileUploader.jsx";
import GroupStage from "./GroupeView.jsx";
import MatchCard from "./MatchCard.jsx";
import { organizeTournament } from "../../utils/organizeTournament.js";

const BracketView = () => {
    const { matches, teams } = useSelector(state => state.tournament);
    
    const organized = organizeTournament(matches);

    const phases = [
        { title: "Round of 32", data: organized.roundOf32 },
        { title: "Round of 16", data: organized.roundOf16 },
        { title: "Quarterfinals", data: organized.quarterFinals },
        { title: "Semifinals", data: organized.semiFinals },
        { title: "Third Place", data: organized.thirdPlace ? [organized.thirdPlace] : [] },
        { title: "Final", data: organized.final ? [organized.final] : [] },
    ].filter(phase => phase.data && phase.data.length > 0);

    return (
        <div className="bracket-wrapper">
            <FileUploader />
            <GroupStage />
            
            <div className="bracket-container">
                {phases.map((phase) => (
                    <div className="bracket-column" key={phase.title}>
                        <section className="bracket-title">
                            <h2 className="column-title">{phase.title}</h2>
                        </section>

                        <div className="bracket-matches-container">
                            <section className="bracket-matches">
                                {phase.data.map((match) => {
                                    // Тук разделяме резултата (напр. "2-1") за MatchCard
                                    const [s1, s2] = match.Score.split('-');
                                    
                                    return (
                                        <MatchCard 
                                            key={match.ID}
                                            // Вземаме името на отбора от обекта teams по неговото ID
                                            team1={teams[match.ATeamID]?.Name || `Team ${match.ATeamID}`}
                                            score1={s1}
                                            team2={teams[match.BTeamID]?.Name || `Team ${match.BTeamID}`}
                                            score2={s2}
                                            isFinal={phase.title === "Final"}
                                            fullMatchData={match} // Подаваме целия обект, ако MatchCard има нужда от него (за дузпите)
                                        />
                                    );
                                })}
                            </section>

                            {/* Генерираме автоматично сепаратори (по 2 на мач, както беше в твоя шаблон) */}
                            {phase.title !== "Final" && phase.title !== "Third Place" && (
                                <section className="bracket-separators">
                                    {Array.from({ length: phase.data.length * 2 }).map((_, i) => (
                                        <div key={i} className="separator"></div>
                                    ))}
                                </section>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BracketView;