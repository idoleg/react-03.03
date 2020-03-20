import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ChatContainer from './ChatContainer';
import ChatList from '../components/ChatList/ChatList';
import Header from '../components/Header/Header';

export default class LayoutContainer extends Component {
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
