import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from './../Header/Header.jsx';
import { ChatContainer } from './../../containers/ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="container">

        <BrowserRouter>
          <Switch>
            <Route path='/' exact>Main page</Route>
            <Route path='/chats/' exact component={ ChatContainer } />
            <Route path='/chats/:id' exact component={ ChatContainer }/>
            <Route path='/about'>About page</Route>
            <Route path='/contacts'>Contacts page</Route>
            <Route path='/'>404 page</Route>
          </Switch>
        </BrowserRouter>

      </Container>
    </>
  )
}