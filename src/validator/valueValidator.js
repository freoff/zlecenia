// @flow

const valueValidator = (min: number, max?: number) => (value: number) => {
  if (max === undefined || max === null) {
    return value >= min;
  } return (value >= min && value <= max);
};

export default valueValidator;
