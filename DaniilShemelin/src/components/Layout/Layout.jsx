import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from './../Header/Header.jsx';
import { ChatContainer } from './../../containers/ChatContainer.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export const Layout = (props) => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg" className="container">

          <Switch>
            <Route path='/' exact>Main page</Route>
            <Route path='/chats/' exact component={ ChatContainer } />
            <Route path='/chats/:id' exact component={ ChatContainer }/>
            <Route path='/profile'>About page</Route>
            <Route path='/'>404 page</Route>
          </Switch>

        </Container>
      </BrowserRouter>
    </>
  )
}