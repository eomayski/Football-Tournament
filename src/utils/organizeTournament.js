export const organizeTournament = (matchesObj) => {

    const all = Object.values(matchesObj).sort((a, b) => Number(a.ID) - Number(b.ID));
    let cursor = all.length - 1;

    const final = all[cursor];

    const knockoutThreshold = all.length > 80 ? 72 : (all.length > 55 ? 48 : 36);
    const totalKnockoutMatches = all.length - knockoutThreshold;
    const hasThirdPlace = totalKnockoutMatches % 2 === 0 && totalKnockoutMatches > 0;

    const thirdPlace = hasThirdPlace ? all[--cursor] : null;

    const semiFinals = all.slice(cursor - 2, cursor);
    cursor -= 2;

    const quarterFinals = all.slice(cursor - 4, cursor);
    cursor -= 4;

    const roundOf16 = all.slice(cursor - 8, cursor);
    cursor -= 8;

    let roundOf32 = [];
    if (all.length > 80) {
        roundOf32 = all.slice(cursor - 16, cursor);
        cursor -= 16;
    }

    const groupStage = all.slice(0, cursor);

    return {
        final,
        thirdPlace,
        semiFinals,
        quarterFinals,
        roundOf16,
        roundOf32,
        groupStage
    };
};