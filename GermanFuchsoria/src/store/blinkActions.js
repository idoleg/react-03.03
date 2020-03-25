import { createActions } from 'redux-actions';

export const { blinkChat, unblinkChat } = createActions({
  BLINK_CHAT: id => id,
  UNBLINK_CHAT: id => id
});
