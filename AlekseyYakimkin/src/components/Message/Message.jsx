import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Message.css'
import classname from 'classname'

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
    const className = classname("Message", {"Message--robot": name == 'Robot'})
    return <li className={className}><strong>{name}:</strong> {content}</li>
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};