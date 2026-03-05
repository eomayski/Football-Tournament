export const organizeTournament = (matchesObj) => {
    
    const all = Object.values(matchesObj).sort((a, b) => Number(a.ID) - Number(b.ID));
    if (all.length === 0) return {};

    let cursor = all.length;
    const final = all[--cursor];
    
    const hasThirdPlace = (all.length - 36) % 2 === 0 && all.length !== 51;
    const thirdPlace = hasThirdPlace ? all[--cursor] : null;

    const semisRaw = all.slice(cursor - 2, cursor);
    cursor -= 2;
    const quartersRaw = all.slice(cursor - 4, cursor);
    cursor -= 4;
    const r16Raw = all.slice(cursor - 8, cursor);
    cursor -= 8;
    const r32Raw = all.length > 80 ? all.slice(cursor - 16, cursor) : [];

    
    const findSourceMatches = (currentMatch, previousRoundRaw) => {
        if (!currentMatch) return [null, null];
        
        const matchA = previousRoundRaw.find(m => 
            m.ATeamID === currentMatch.ATeamID || m.BTeamID === currentMatch.ATeamID
        );
        const matchB = previousRoundRaw.find(m => 
            m.ATeamID === currentMatch.BTeamID || m.BTeamID === currentMatch.BTeamID
        );
        
        return [matchA, matchB];
    };

    
    const sortedQuarters = semisRaw.flatMap(semi => findSourceMatches(semi, quartersRaw));

    const sortedR16 = sortedQuarters.flatMap(q => findSourceMatches(q, r16Raw));

    const sortedR32 = r32Raw.length > 0 
        ? sortedR16.flatMap(r16 => findSourceMatches(r16, r32Raw)) 
        : [];

    return {
        final,
        thirdPlace,
        semiFinals: semisRaw,
        quarterFinals: sortedQuarters.filter(Boolean),
        roundOf16: sortedR16.filter(Boolean),
        roundOf32: sortedR32.filter(Boolean),
        groupStage: all.slice(0, cursor)
    };
};