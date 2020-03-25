import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ProfileContainer from '../../containers/ProfileContainer';
import ChatContainer from '../../containers/ChatContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import { history } from '../../store';

export default class Router extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
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
      </ConnectedRouter>
    );
  }
}
