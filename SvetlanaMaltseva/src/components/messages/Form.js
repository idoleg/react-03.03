import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.addMessage = this.props.addMessage;
    this.sendForm = this.sendForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  sendForm(e) {
    console.log('test');
    e.preventDefault();
    const { newMessage } = e.target;
    this.addMessage({ name: 'Me', text: newMessage.value });
  }

  render() {
    return (
      <form className='mt-auto mb-4' onSubmit={this.sendForm}>
        <div className='input-group'>
          <input
            className='form-control form-control-lg'
            type='text'
            name='newMessage'
            onChange={this.handleChange}
          />
          <div className='input-group-append'>
            <button type='submit' className='btn btn-lg btn-info'>
              Send
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
