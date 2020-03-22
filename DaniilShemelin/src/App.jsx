import React, { Component } from 'react';
import { ChatContainer } from './containers/ChatContainer.jsx';
import { Layout } from './components/Layout/Layout.jsx';


export class App extends Component {
  render() {
    return (
      <Layout>
          <ChatContainer />
      </Layout>
    )
  }
}
