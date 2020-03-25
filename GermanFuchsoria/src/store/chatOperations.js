import { addChat, sendMessage } from './chatActions';
import { generateId } from '../components/common/idUtils';

export const createChat = title => (dispatch, getState) => {
  const id = generateId();

  dispatch(addChat({ id, title }));
};


export const updateMessage = ({id, message}) => (dispatch, getState) => {
  const messageId = generateId();

  dispatch(sendMessage({id, message: {...message, messageId}}));
};
