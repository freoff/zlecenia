import { minmax } from '.';

const length = (min, max) => test => minmax(min, max)(test.length);

export default length;
