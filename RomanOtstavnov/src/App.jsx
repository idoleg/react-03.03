import styles from './app.scss';
import classnames from 'classnames/bind';
import React from 'react';
import Header from "./components/Header/Header";
import ChatContainer from "./containers/ChatContainer";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const cx = classnames.bind(styles);

export const App = () => (
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
);

export default App;
