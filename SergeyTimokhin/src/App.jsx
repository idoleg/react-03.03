import React, {Component} from 'react';
import ChatContainer from './containers/ChatContainer';
import {Header} from './components/Header/Header';
import {ChatList} from './components/ChatList/ChatList';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {Profile} from './components/Profile/Profile';
import {initStore} from './store';
import {Provider} from 'react-redux';
import {initChats} from './store/ChatActions';


const store = initStore();
store.dispatch(initChats())



export const App = () => {
    return (<div style={ { display: 'flex', flexWrap: 'wrap' } }>
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
          <Switch>
              <Route path="/" exact>It's index page</Route>
              <Route path="/profile" exact component={Profile} />
              <Route path="/chats">
                  <ChatList/>
                  <Switch>
                      <Route path="/chats" exact component={ChatContainer} />
                      <Route path="/chats/:id" exact component={ChatContainer} />
                  </Switch>
              </Route>
              <Route path="/about">It's about page</Route>
              <Route path="/contacts">It's contacts page</Route>
              <Route path="/">It's 404 page. Not found.</Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
    )
}
