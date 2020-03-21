import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProfileContainer from '../../containers/ProfileContainer';
import ChatContainer from '../../containers/ChatContainer';
import HeaderContainer from '../../containers/HeaderContainer';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <HeaderContainer />
        <Switch>
          <Route path="/" exact>
            It's index page
          </Route>
          <Route path="/chats">
            <Switch>
              <Route path="/chats" exact component={ChatContainer} />
              <Route path="/chats/:id" exact component={ChatContainer} />
            </Switch>
          </Route>
          <Route path="/profile" component={ProfileContainer}></Route>
          <Route path="/">It's 404 page. Not found.</Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
