

import { mapDispatchToProps } from './kontrahentContainer';
import { minmax, length, notEmpty } from '../../validator';
import { createAction } from 'redux-actions';

describe('mapDispatchToProps validation ', () => {
  it('should no throw error', () => {
    const getState = jest.fn();

    const dispatch = jest.fn();

    const event = {
      target: {
        name: 'field1',
        value: 'value1',
      },
    };
    const lengthValidator = length(1, 2);

    expect(length(1, 10)).toBeInstanceOf(Function);
    expect(length(1, null)).toBeInstanceOf(Function);
    mapDispatchToProps.validate(event, length(1, 2), notEmpty)(dispatch, getState);
    // console.log(dispatch.mock.calls[0][0]);
  });
});
