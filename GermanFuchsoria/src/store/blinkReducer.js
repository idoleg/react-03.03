import { handleActions } from 'redux-actions';
import { blinkChat, unblinkChat } from './blinkActions';

const initialState = [];

export default handleActions(
  {
    [blinkChat]: (store, action) => {
      const id = action.payload;

      return [...store, id];
    },
    [unblinkChat]: (store, action) => {
      const id = action.payload;
      const withoutId = store.filter(item => item !== id);

      return [withoutId];
    }
  },
  initialState
);
