import React, { Component } from 'react';

class MessageItem extends Component {
  render() {
    const { name, text } = this.props;
    return (
      <div className='media mb-3'>
        <div className='mr-3 col-md-3 bg-white rounded-pill'>
          <div className='media-body p-2'>
            <h5 className='mt-0 mb-1'>{name}</h5>
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
