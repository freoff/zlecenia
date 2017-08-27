import { handleAction } from 'redux-actions';
import { APP_TITLE } from '../actionsCreators';

const appReducer = handleAction(
  APP_TITLE,
  (state = {}, action) => ({
    ...state,
    title: action.payload,
  }),
  { title: 'SET TITLE' },
);

export { appReducer };
