import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from './../Header/Header.jsx';


export const Layout = (props) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" className="container">
        { props.children }
      </Container>
    </>
  )
}