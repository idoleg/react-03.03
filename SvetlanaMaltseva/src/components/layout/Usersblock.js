import React, { Component } from 'react';
import User from '../users/User';

class Usersblock extends Component {
  render() {
    const { messages } = this.props;
    const namesList = [];
    messages.filter(function(message) {
      if (!namesList.includes(message.name)) {
        return namesList.push(message.name);
      }
    });
    return (
      <div className='col-md-3 p-0'>
        <h2 className='border-bottom p-3 bg-light'>Users List</h2>
        <ul className='list-group list-group-flush'>
          {namesList.map((name, index) => (
            <User key={index} name={name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Usersblock;
