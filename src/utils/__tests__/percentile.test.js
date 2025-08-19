const percentile = require('../percentile');

describe('percentile', () => {
  it('returns minimum for p=0', () => {
    expect(percentile(0, [1, 2, 3])).toBe(1.00);
  });
  it('returns maximum for p=100', () => {
    expect(percentile(100, [1, 2, 3])).toBe(3.00);
  });
  it('returns nearest-rank for p=50, N=4', () => {
    expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
  });
  it('throws TypeError for non-number p', () => {
    expect(() => percentile('a', [1, 2, 3])).toThrow(TypeError);
  });
  it('throws RangeError for p out of range', () => {
    expect(() => percentile(-1, [1, 2, 3])).toThrow(RangeError);
    expect(() => percentile(101, [1, 2, 3])).toThrow(RangeError);
  });
  it('throws TypeError for non-array values', () => {
    expect(() => percentile(50, 'not an array')).toThrow(TypeError);
  });
  it('throws RangeError for empty array', () => {
    expect(() => percentile(50, [])).toThrow(RangeError);
  });
  it('throws TypeError for non-number values', () => {
    expect(() => percentile(50, [1, 'a', 3])).toThrow(TypeError);
  });
  it('returns 2 decimals', () => {
    expect(percentile(50, [1.123, 2.456, 3.789])).toBe(2.46);
  });
});
