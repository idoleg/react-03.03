import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MessageItem.css';
import classname from 'classname';

class MessageItem extends Component {
  render() {
    const { name, text } = this.props;
    const className = classname('message-item', {
      'message-item__robot': name == 'Robot'
    });
    return (
      <div className={className}>
        <h5>{name}</h5>
        {text}
      </div>
    );
  }
}

MessageItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MessageItem;
