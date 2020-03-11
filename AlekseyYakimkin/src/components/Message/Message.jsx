import React, {Component} from 'react';
import PropTypes from 'prop-types';

// export class Message extends Component {
//     // static propTypes = {
//     //     text: PropTypes.string.isRequired,
//     // };
 
//     render() {
//         const {props:{name,content}} = this;
//         return <li><strong>{name}:</strong> {content}</li>
//     }
//  }
 
export const Message = ({name, content}) => {
    return <li><strong>{name}:</strong> {content}</li>
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};