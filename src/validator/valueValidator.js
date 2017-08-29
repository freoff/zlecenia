/**
 * Function check if value is between min and max included both.
 *
 * @param {Number} min
 * @param {Number} max
 * @returns {Boolean}
 */
const valueValidator = (min, max, msg) => (value) => {
  let result;
  if (max === undefined || max === null) {
    result = value >= min;
  } else {
    result = value >= min && value <= max;
  }

  return result;
};

export default valueValidator;
