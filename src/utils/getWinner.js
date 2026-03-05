export const getWinner = (score) => {
    if (!score) return null;

    const penalties = score.match(/\((\d+)\)/g);

    if (penalties) {
        const p1 = parseInt(penalties[0].replace(/[()]/g, ''));
        const p2 = parseInt(penalties[1].replace(/[()]/g, ''));
        return p1 > p2 ? 1 : 2;
    }

    const [s1, s2] = score.split('-').map(Number);
    if (s1 === s2) return 0;
    return s1 > s2 ? 1 : 2;
};

