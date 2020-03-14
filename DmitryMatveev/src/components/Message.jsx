import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Message extends Component {
   static propTypes = {
     author: PropTypes.string.isRequired,
       text: PropTypes.string.isRequired
   };

   render() {
    const {author, text} = this.props;
       return (
        <li className="content__message">
           <strong>{author}</strong>:{text}
        </li>
           );
   }
}
