import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Router from '../components/Router/Router';

export default class LayoutContainer extends Component {
  render() {
    return (
      <Container>
        <Router />
      </Container>
    );
  }
}
