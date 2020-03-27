import { sendMessage } from './chatActions';

const BOT_NAME = 'Mr. Robot';

export const botAnswer = (store) => (next) => (action) => {
  next(action);

  if(action.type === sendMessage.toString()) {
    const {name, id} = action.payload;

    if(name !== BOT_NAME) {
      setTimeout(() =>  store.dispatch(sendMessage(id, BOT_NAME, `Hello, ${name}.`)), 2000);
    }
  }
}