const fields = {
  TagName: 'input',
  id: 'nip',
  label: 'Nip:'
  tagProps: {
    placeholder='Nip firmy'
  },
  specialTagProps: {},
};

/**
 * 
 * @param {Array} fields 
 */
const createForm = (fields, onBlur, onChange, stateKontrahentFormErrors) => {
  fields.map((field) => {
    const { TagName, id, tagProps, specialTagProps } = field;
    return (
      <div
        className={`form-group ${fieldHasError(id, stateKontrahentFormErrors)
          ? 'has-error'
          : ''}`}
      >
      <label htmlFor={id}>{field.label}</label>
      <Tagname id={id} name={id} {...specialTagProps} {...tagProps} className={`form-controll ${field.class}`}>
    );
  });
};

const fieldHasError = (fieldName, kontrahentFormErrors) =>
kontrahentFormErrors[fieldName] !== undefined;