import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from './../Header/Header.jsx';
import ChatContainer from './../../containers/ChatContainer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { initStore } from '../../store';
import { Provider } from 'react-redux';
import { initChats } from '../../store/chatActions';
import ChatListContainer from './../../containers/ChatListContainer';


const store = initStore();

store.dispatch(initChats());

export const Layout = (props) => {
  return (
    <Provider store={ store }>
      <Header />
      <Container maxWidth="lg" className="container">
        <BrowserRouter>
          <ChatListContainer />
          <Switch>
            <Route path='/' exact>Main page</Route>
            <Route path='/profile'>Profile page</Route>
            <Route path='/chats' exact>
              <Redirect to="/chats/1" />
            </Route>
            <Route path='/chats/:id' exact component={ ChatContainer } />
            <Route path='/about'>About page</Route>
            <Route path='/contacts'>Contacts page</Route>
            <Route path='/'>404 page</Route>
          </Switch>
        </BrowserRouter>

      </Container>
    </Provider>
  )
}