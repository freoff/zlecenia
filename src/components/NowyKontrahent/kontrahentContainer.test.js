import { createAction } from 'redux-actions';
import { mapDispatchToProps } from './kontrahentContainer';
import { minmax, length, notEmpty } from '../../validator';

describe('mapDispatchToProps validation ', () => {
  it('should no throw error', () => {
    const getState = jest.fn();

    const dispatch = jest.fn();

    const event = {
      target: {
        name: 'field1',
        value: '12',
      },
    };
    const lengthValidator = length(5, 10);
    expect(length(1, 10)).toBeInstanceOf(Function);
    expect(length(1, null)).toBeInstanceOf(Function);
    mapDispatchToProps.validate(event, 'Rozmiar pomiedzy 1 a 2', length(1, 2), notEmpty)(dispatch, getState);
    expect(dispatch.mock.calls[0][0]).toBe({ type: 'VALIDATION_ERROR' });
    // console.log(dispatch.mock.calls[0][0]);
  });
});
