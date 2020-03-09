import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       content: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       id: PropTypes.number.isRequired
   };

   render() {
   return <div ><strong>{this.props.name}</strong> :  {this.props.content }</div>
   }
}
