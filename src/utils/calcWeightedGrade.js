// Calculates a weighted grade from an array of {score, weight} objects
// Returns a number between 0-100 with 2 decimals
function calcWeightedGrade(items) {
    if (!Array.isArray(items)) throw new TypeError('items must be an array');
    if (items.length === 0) throw new RangeError('items array must not be empty');
    let totalWeight = 0;
    let totalScore = 0;
    for (const item of items) {
        if (typeof item !== 'object' || item === null) throw new TypeError('Each item must be an object');
        const { score, weight } = item;
        if (typeof score !== 'number' || typeof weight !== 'number') throw new TypeError('score and weight must be numbers');
        if (score < 0 || score > 100) throw new RangeError('score must be between 0 and 100');
        if (weight < 0 || weight > 1) throw new RangeError('weight must be between 0 and 1');
        totalWeight += weight;
        totalScore += score * weight;
    }
    if (Math.abs(totalWeight - 1) > 0.001) throw new RangeError('Sum of weights must be 1 ±0.001');
    return Number(totalScore.toFixed(2));
}

module.exports = calcWeightedGrade;
