// @flow
import { minmax } from '.';

const length = (min: number, max?: number) => (test: string) => minmax(min, max)(test.length);

export default length;


// uncovered code flow
