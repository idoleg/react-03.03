import React, { Component } from 'react';
import User from '../users/User';

class Usersblock extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className='col-md-3 p-0'>
        <h2 className='border-bottom p-3 bg-light'>Users List</h2>
        <ul className='list-group list-group-flush'>
          {messages.map((message, index) => (
            <User key={index} name={message.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Usersblock;
