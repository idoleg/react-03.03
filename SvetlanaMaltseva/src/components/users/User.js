import React, { Component } from 'react';

class User extends Component {
  render() {
    const { name } = this.props;
    return <li className='list-group-item'>{name}</li>;
  }
}

export default User;
