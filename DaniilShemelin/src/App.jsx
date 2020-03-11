import React, { Component } from 'react';
import { ChatContainer } from './containers/ChatContainer.jsx';


export class App extends Component {
  render() {
    return (
      <div className="container">
        <ChatContainer />
      </div>
    )
  }
}
