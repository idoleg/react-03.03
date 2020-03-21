import { handleActions } from 'redux-actions';
import { initProfile, updateName } from './profileActions';

const initialState = {};

export default handleActions(
  {
    [initProfile]: (store, action) => {
      const profile = action.payload;

      return profile;
    },
    [updateName]: (store, action) => {
      const { name } = action.payload;

      return { ...store, name };
    }
  },
  initialState
);
