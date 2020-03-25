import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';

class ChatForm extends Component {
  static propTypes = {
    onSendMessage: PropTypes.func.isRequired
  };
  textRef = React.createRef();

  clearInput(input) {
    input.value = '';
  }

  sendMessage = e => {
    e.preventDefault();
    const { message } = e.target;
    const { name, accountAccess } = this.props.profile;

    this.props.onSendMessage({ author: name, text: message.value, authorAccess: accountAccess });
    this.clearInput(message);
  };

  componentDidUpdate() {
    this.textRef.focus();
  }

  render() {
    return (
      <form className="chat__form" onSubmit={this.sendMessage}>
        <TextField
          type="text"
          name="message"
          className="chat__input chat__input_message"
          placeholder="Write your Message"
          label="Message"
          autoFocus
          inputRef={input => this.textRef = input}
          required
        />
        <Button className="chat__submit" type="submit" variant="contained" color="primary" endIcon={<Icon>send</Icon>}>
          Send Message
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (store, props) => {
  const { profile } = store;

  return { profile };
};

export default connect(mapStateToProps)(ChatForm);
