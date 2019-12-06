import { findElement } from './findElement';

describe('findElement', () => {
  test('should return the correct output', () => {
    expect(findElement([1, 3, 5, 8, 9, 10]
    )).toBe(8);
    expect(findElement([1, 3, 5, 9])).toEqual(undefined);
  });
});