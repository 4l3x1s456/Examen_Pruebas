
function percentile(p, values) {
    if (typeof p !== 'number' || isNaN(p)) throw new TypeError('p debe ser un número');
    if (!Array.isArray(values)) throw new TypeError('values debe ser un array');
    if (values.length < 1) throw new RangeError('El array de values debe tener al menos 1 elemento');
    if (p < 0 || p > 100) throw new RangeError('p debe estar entre 0 y 100');
    for (const v of values) {
        if (typeof v !== 'number' || isNaN(v)) throw new TypeError('Todos los valores deben ser números');
    }
    const sorted = [...values].sort((a, b) => a - b);
    const N = sorted.length;
    if (p === 0) return Number(sorted[0].toFixed(2));
    if (p === 100) return Number(sorted[N - 1].toFixed(2));
    const rank = Math.ceil((p / 100) * N);
    return Number(sorted[rank - 1].toFixed(2));
}

export default percentile;
