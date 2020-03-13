import React, { Component } from 'react';

export default class Message extends Component {
  render() {
    return <li><strong>{this.props.name}: </strong>{this.props.content}</li>
  }
}
