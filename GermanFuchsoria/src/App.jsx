import React, { Component } from 'react';
import LayoutContainer from './containers/LayoutContainer';
import { initStore } from './store';
import { Provider } from 'react-redux';
import { initChats } from './store/chatActions';
import { initProfile } from './store/profileActions';

const chatsArchive = {
  0: {
    chatTitle: 'Chat 1',
    messages: [
      { author: 'Ivan', text: 'Hi Guys' },
      { author: 'Stephan', text: 'Hiya' },
      { author: 'Alex', text: 'Do you wanna chat with?' }
    ]
  },
  1: {
    chatTitle: 'Chat 2',
    messages: [
      { author: 'Ivan2', text: 'Hi Guys' },
      { author: 'Stephan2', text: 'Hiya' },
      { author: 'Alex2', text: 'Do you wanna chat with?' }
    ]
  },
  2: {
    chatTitle: 'Chat 3',
    messages: [
      { author: 'Ivan3', text: 'Hi Guys' },
      { author: 'Stephan3', text: 'Hiya' },
      { author: 'Alex3', text: 'Do you wanna chat with?' }
    ]
  },
  3: {
    chatTitle: 'Chat 4',
    messages: [
      { author: 'Ivan4', text: 'Hi Guys' },
      { author: 'Stephan4', text: 'Hiya' },
      { author: 'Alex4', text: 'Do you wanna chat with?' }
    ]
  }
};

const profile = {
  name: 'Kokoro',
  accountAccess: 'user'
}

const store = initStore();
store.dispatch(initChats(chatsArchive));
store.dispatch(initProfile(profile))

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <LayoutContainer />
        </Provider>
      </div>
    );
  }
}
