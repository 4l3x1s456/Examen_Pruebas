
function calcWeightedGrade(items) {
    if (!Array.isArray(items)) throw new TypeError('Los items deben ser un array');
    if (items.length === 0) throw new RangeError('El array de items no debe estar vacío');
    let totalWeight = 0;
    let totalScore = 0;
    for (const item of items) {
        if (typeof item !== 'object' || item === null) throw new TypeError('Cada item debe ser un objeto');
        const { score, weight } = item;
        if (typeof score !== 'number' || typeof weight !== 'number') throw new TypeError('score y weight deben ser números');
        if (score < 0 || score > 100) throw new RangeError('score debe estar entre 0 y 100');
        if (weight < 0 || weight > 1) throw new RangeError('weight debe estar entre 0 y 1');
        totalWeight += weight;
        totalScore += score * weight;
    }
    if (Math.abs(totalWeight - 1) > 0.001) throw new RangeError('La suma de los pesos debe ser 1 ±0.001');
    return Number(totalScore.toFixed(2));
}

export default calcWeightedGrade;
