import MatchCard from "./MatchCard.jsx";

const BracketView = () => {
    return (
        <div className="bracket-wrapper">
            <div className="bracket-container">

                {/* Round of 16 Column */}
                <div className="bracket-column">
                    <section className="bracket-title">
                        <h2 className="column-title">Round of 16</h2>
                    </section>
                    <div className="bracket-matches-container">

                        <section className="bracket-matches">
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="1" />
                            <MatchCard team1="Team One" score1="0" team2="Team Two" score2="3" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="1" />
                            <MatchCard team1="Team One" score1="0" team2="Team Two" score2="3" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                        </section>
                        <section className="bracket-separators">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </section>
                    </div>
                </div>

                {/* Round of 16 Column */}
                <div className="bracket-column">
                    <section className="bracket-title">
                        <h2 className="column-title">Round of 16</h2>
                    </section>
                    <div className="bracket-matches-container">

                        <section className="bracket-matches">
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="1" />
                            <MatchCard team1="Team One" score1="0" team2="Team Two" score2="3" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="0" />
                        </section>
                        <section className="bracket-separators">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </section>
                    </div>
                </div>

                {/* Quarterfinals Column */}
                <div className="bracket-column">
                    <section className="bracket-title">
                        <h2 className="column-title">Quarterfinals</h2>
                    </section>
                    <div className="bracket-matches-container">
                        <section className="bracket-matches">
                            <MatchCard team1="Team One" score1="3" team2="Team Two" score2="1" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                        </section>
                        <section className="bracket-separators">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </section>
                    </div>
                </div>


                {/* Semifinals Column */}
                <div className="bracket-column">
                    <section className="bracket-title">
                        <h2 className="column-title">Semifinals</h2>
                    </section>
                    <div className="bracket-matches-container">
                        <section className="bracket-matches">
                            <MatchCard team1="Team One" score1="2" team2="Team Two" score2="1" />
                            <MatchCard team1="Team One" score1="1" team2="Team Two" score2="2" />
                        </section>
                        <section className="bracket-separators">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </section>
                    </div>
                </div>

                {/* Final Column */}
                <div className="bracket-column">
                    <section className="bracket-title">
                        <h2 className="column-title">Final</h2>
                    </section>
                    <section className="bracket-matches">
                        <MatchCard team1="Team One" score1="3" team2="Team Two" score2="2" isFinal={true} />
                    </section>
                </div>

            </div>
        </div>
    );
};

export default BracketView;