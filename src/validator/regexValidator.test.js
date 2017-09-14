import v from './regexValidator';

it('should retun true', () => {
  expect(v(/^\d{10}$/)('11231231212')).toBeFalsy();
});


const fal = reg => expect(v(/^\d{10}$/)('11231231212')).toBeFalsy();
