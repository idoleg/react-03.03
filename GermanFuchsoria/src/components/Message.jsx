import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    textCapitalize: PropTypes.func.isRequired
  };

  render() {
    const { author, text, textCapitalize } = this.props;

    return (
      <li className="content__message">
        <strong>{textCapitalize(author)}</strong>: {text}
      </li>
    );
  }
}
