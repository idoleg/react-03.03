import styles from './app.scss';
import classnames from 'classnames/bind';
import React from 'react';
import Header from "./components/Header/Header";
import ChatContainer from "./containers/ChatContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {initStore} from "../store";
import {initChats, loadData} from "../store/chatActions";
import {init as initProfile} from "../store/profileActions";
import {Provider} from "react-redux";

const cx = classnames.bind(styles);

const store = initStore();
store.dispatch(initChats());
store.dispatch(initProfile({name: 'Roman Ot', city: 'Ekaterinburg'}));

fetch('https://raw.githubusercontent.com/vatokato/react-03.03/master/RomanOtstavnov/data/messages.json')
  .then(result => result.json())
  .then(chats => store.dispatch(loadData(chats)))
  .catch(err => console.error(err));

export const App = () => (
  <Provider store={store}>
    <div className={cx('wrapper')}>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" exact>It's index page</Route>
            <Route path="/chats" exact component={ChatContainer} />
            <Route path="/chats/:id" component={ChatContainer} />
            <Route path="/profile">It's profile page</Route>
            <Route path="/">It's 404 page. Not found.</Route>
        </Switch>
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
