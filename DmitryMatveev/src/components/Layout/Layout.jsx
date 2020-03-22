import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {ChatContainer} from '../../containers/ChatContainer';
import ChatList from '../ChatList/ChatList';
import Header from '../Header/Header';

export class Layout extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <Grid container item xs={3}>
            <ChatList />
          </Grid>
          <Grid container item xs={9}>
            <ChatContainer />
          </Grid>
        </Grid>
      </Container>
    );
  }
}