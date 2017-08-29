import notEmpty from './notEmpty';

const multiLineEmptySting = `


`;
const multiLineNotEmptySting = `
 test   tab tab     and space
 enter new line
 another lint

`;

describe('notEmpty', () => {
  it('should pass all test', () => {
    expect(notEmpty('    ')).toBeFalsy();
    expect(notEmpty('  a  ')).toBeTruthy();
    expect(notEmpty(' fdsfds   ')).toBeTruthy();
    expect(notEmpty(multiLineNotEmptySting)).toBeTruthy();
    expect(notEmpty(multiLineEmptySting)).toBeFalsy();
  });
});
