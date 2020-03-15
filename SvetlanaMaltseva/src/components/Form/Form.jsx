import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: 'Brad'
    };
    this.addMessage = this.props.addMessage;
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  sendForm = e => {
    e.preventDefault();
    const { name, text } = this.state;
    this.addMessage({ name: name, text: text });
    this.setState({ name: 'Brad', text: '' });
  };

  render() {
    return (
      <form onSubmit={this.sendForm}>
        <div className='row'>
          <div className='name-block'>
            <input
              className='form-control-lg'
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className='message-block'>
            <input
              className='form-control-lg'
              type='text'
              name='text'
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>
          <div className='button-block'>
            <button type='submit' className='btn-primary'>
              Send
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
