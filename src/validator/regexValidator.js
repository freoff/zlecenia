// @flow

const validator = (reg: RegExp) => (testString: string) => reg.test(testString);

const nipValidator = validator(/^\d{10}$/);


export default validator;
export { nipValidator };
