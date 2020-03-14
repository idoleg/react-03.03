import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SendForm extends Component {
  static propTypes = {
    updateMessagesList: PropTypes.func.isRequired
  };

  updateMessagesList = this.props.updateMessagesList;

  clearInput(input) {
    input.value = '';
  }
  sendMessage = e => {
    e.preventDefault();
    const { name, message } = e.target;

    Promise.resolve()
      .then(this.updateMessagesList({ author: name.value, text: message.value }))
      .then(this.clearInput(message))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <form className="content__form" onSubmit={this.sendMessage}>
        <input
          type="text"
          name="name"
          className="content__input content__input_name"
          placeholder="Write your Name"
          required
        />
        <input
          type="text"
          name="message"
          className="content__input content__input_message"
          placeholder="Write your Message"
          required
        />
        <button className="content__submit" type="submit">
          Send Message
        </button>
      </form>
    );
  }
}
