import validator from './valueValidator';

describe('value validator', () => {
  it('should pass all', () => {
    expect(validator(2, 5)(1)).toBeFalsy();
    expect(validator(2, 5)(6)).toBeFalsy();
    expect(validator(2, 5)(2)).toBeTruthy();
    expect(validator(2, 5)(3)).toBeTruthy();
    expect(validator(2, 5)(5)).toBeTruthy();
  });
  it('should pass all when 2 arg is null or undefined', () => {
    expect(validator(2, null)(1)).toBeFalsy();
    expect(validator(2)(6)).toBeTruthy();
    expect(validator(2, 5)(2)).toBeTruthy();
    expect(validator(2, 5)(3)).toBeTruthy();
    expect(validator(2, 5)(5)).toBeTruthy();
  });
});
