import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import './Message.css';

// export class Message extends Component {
//   render() {
//     return <li><strong>{this.props.name}: </strong>{this.props.content}</li>
//   }
// }

export const Message = ({name, content}) => {
  const className = classname("Message", {'Message--robot': name == 'Robot'});

  return <li className={className}><strong>{name}: </strong>{content}</li>
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
