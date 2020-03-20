import React from 'react';
import { MessageList } from './MessageList/MessageList.jsx';


export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MessageList />
      </div>
    )
  }
}