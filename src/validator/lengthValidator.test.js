// @flow
import jest from 'jest';

import lengthValidator from './lengthValidator';

describe('lengthValidator', () => {
  it('should pass all test', () => {
    expect(lengthValidator(3)('as')).toBeFalsy();
    expect(lengthValidator(3)('asaa')).toBeTruthy();
    expect(lengthValidator(3)('asa')).toBeTruthy();
    expect(lengthValidator(3)('asaas sa')).toBeTruthy();
    expect(lengthValidator(3)('asaas sa')).toBeTruthy();
    expect(lengthValidator(3, 5)('12')).toBeFalsy();
    expect(lengthValidator(3, 5)('123')).toBeTruthy();
    expect(lengthValidator(3, 5)('12345')).toBeTruthy();
    expect(lengthValidator(3, 5)('123456')).toBeFalsy();
  });
});
