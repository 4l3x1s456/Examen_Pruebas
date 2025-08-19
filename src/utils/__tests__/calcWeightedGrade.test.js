import calcWeightedGrade from '../calcWeightedGrade.js';

describe('calcWeightedGrade', () => {
  it('calculates weighted grade for reference case', () => {
    expect(calcWeightedGrade([
      { score: 80, weight: 0.4 },
      { score: 90, weight: 0.6 }
    ])).toBe(86.00);
  });

  it('throws RangeError if weights do not sum to 1 ±0.001', () => {
    expect(() => calcWeightedGrade([
      { score: 80, weight: 0.5 },
      { score: 90, weight: 0.6 }
    ])).toThrow(RangeError);
  });

  it('throws TypeError for non-array input', () => {
    expect(() => calcWeightedGrade('not an array')).toThrow(TypeError);
  });

  it('throws RangeError for empty array', () => {
    expect(() => calcWeightedGrade([])).toThrow(RangeError);
  });

  it('throws TypeError for non-object item', () => {
    expect(() => calcWeightedGrade([null])).toThrow(TypeError);
  });

  it('throws TypeError for non-number score/weight', () => {
    expect(() => calcWeightedGrade([{ score: 'a', weight: 0.5 }])).toThrow(TypeError);
    expect(() => calcWeightedGrade([{ score: 80, weight: 'b' }])).toThrow(TypeError);
  });

  it('throws RangeError for score out of range', () => {
    expect(() => calcWeightedGrade([{ score: -1, weight: 1 }])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{ score: 101, weight: 1 }])).toThrow(RangeError);
  });

  it('throws RangeError for weight out of range', () => {
    expect(() => calcWeightedGrade([{ score: 80, weight: -0.1 }])).toThrow(RangeError);
    expect(() => calcWeightedGrade([{ score: 80, weight: 1.1 }])).toThrow(RangeError);
  });

  it('returns 2 decimals', () => {
    expect(calcWeightedGrade([
      { score: 80.123, weight: 0.5 },
      { score: 90.456, weight: 0.5 }
    ])).toBe(85.29);
  });
});
