import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormForUser extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };

  clearInput(input) {
    input.value = '';
  }

  sendMessage = e => {
    e.preventDefault();
    const { name, message } = e.target;

    this.props.onSendMessage({ name: name.value, text: message.value });
    this.clearInput(message);
  };

  render() {
    return (
      <form className="chat__form" onSubmit={this.sendMessage}>
        <TextField
          variant="outlined"
          type="text"
          name="name"
          className="chat__input chat__input_name"
          placeholder="Write your Name"
          label="Name"
          required
        />
        <TextField
          variant="outlined"
          type="text"
          name="message"
          className="chat__input chat__input_message"
          placeholder="Write your Message"
          label="Message"
          autoFocus
          required
        />
        <Button className="chat__submit" type="submit" variant="contained" color="primary">
          Send 
        </Button>
      </form>
    );
  }
}