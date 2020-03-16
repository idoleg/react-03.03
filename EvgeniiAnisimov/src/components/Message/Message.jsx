import React, { Component } from 'react';
import PropTypes from 'prop-types';

// export class Message extends Component {
//   render() {
//     return <li><strong>{this.props.name}: </strong>{this.props.content}</li>
//   }
// }

export const Message = ({name, content}) => {
  return <li><strong>{name}: </strong>{content}</li>
}

Message.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}
