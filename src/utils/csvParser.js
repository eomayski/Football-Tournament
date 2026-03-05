export const parseCSV = (csvText, idKey) => {
    if (!csvText) return {};

    const lines = csvText.split(/\r?\n/).filter(l => l.trim() !== "");
    if (lines.length < 2) return {};

    const headers = lines[0].split(',').map(h => h.trim());

    const effectiveIdKey = headers.includes(idKey) ? idKey : headers[0];

    return lines.slice(1).reduce((acc, line, idx) => {
        const values = line.split(',').map(v => (v === undefined ? '' : v.trim()));
        const rowObject = headers.reduce((obj, h, i) => ({ ...obj, [h]: values[i] ?? '' }), {});

        const key = rowObject[effectiveIdKey] || String(idx);
        acc[key] = rowObject;
        return acc;
    }, {});
};