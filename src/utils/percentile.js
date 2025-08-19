// Returns the percentile p (0-100) of an array of numbers using nearest-rank method
function percentile(p, values) {
    if (typeof p !== 'number' || isNaN(p)) throw new TypeError('p must be a number');
    if (!Array.isArray(values)) throw new TypeError('values must be an array');
    if (values.length < 1) throw new RangeError('values array must have at least 1 element');
    if (p < 0 || p > 100) throw new RangeError('p must be between 0 and 100');
    for (const v of values) {
        if (typeof v !== 'number' || isNaN(v)) throw new TypeError('All values must be numbers');
    }
    const sorted = [...values].sort((a, b) => a - b);
    const N = sorted.length;
    if (p === 0) return Number(sorted[0].toFixed(2));
    if (p === 100) return Number(sorted[N - 1].toFixed(2));
    const rank = Math.ceil((p / 100) * N);
    return Number(sorted[rank - 1].toFixed(2));
}

module.exports = percentile;
