import React, { Component } from 'react';
import { concat } from 'async';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      name: ''
    };
    this.addMessage = this.props.addMessage;
    this.sendForm = this.sendForm.bind(this);
  }
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  sendForm(e) {
    e.preventDefault();
    const { name, text } = this.state;
    this.addMessage({ name: name, text: text });
    this.setState({ name: '', text: '' });
  }

  render() {
    return (
      <form className='mt-auto mb-4' onSubmit={this.sendForm}>
        <div className='form-row'>
          <div className='col-3'>
            <input
              className='form-control form-control-lg'
              type='text'
              name='userName'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className='input-group col-9'>
            <input
              className='form-control form-control-lg'
              type='text'
              name='newMessage'
              value={this.state.text}
              onChange={this.handleChange}
            />
            <div className='input-group-append'>
              <button type='submit' className='btn btn-lg btn-info'>
                Send
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
