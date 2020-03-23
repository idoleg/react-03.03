import React, { Component } from 'react';
import MessageList from '../MessageList/MessageList';
import Form from '../Form/Form';

class Messageblock extends Component {
  render() {
    const { messages } = this.props;
    const { addMessage } = this.props;
    return (
      <div className='col-md-9 alert-info min-vh-100 d-flex flex-column p-4'>
        <MessageList messages={messages} />
        <Form addMessage={addMessage} />
      </div>
    );
  }
}

export default Messageblock;
