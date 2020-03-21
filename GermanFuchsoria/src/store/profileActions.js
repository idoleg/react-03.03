import { createActions } from 'redux-actions';

export const { initProfile, updateName } = createActions({
  INIT_PROFILE: profile => profile,
  UPDATE_NAME: ({name}) => ({ name }),
});
