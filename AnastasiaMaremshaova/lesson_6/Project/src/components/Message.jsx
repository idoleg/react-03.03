import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       content: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       id: PropTypes.number.isRequired
   };

   render() {
   return <div className="message"><img className="menu-message"  src="src/img/menuMessage.svg" alt ="menu"/>
   <strong>{this.props.name}</strong> :  {this.props.content }</div>
   }
}
