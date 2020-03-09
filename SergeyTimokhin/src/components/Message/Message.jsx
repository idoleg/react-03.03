import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Message extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };

    render() {
        return <div>
            <strong>{this.props.name}: </strong>
            { this.props.text }
            </div>
    }
}

// export const Message = ({ name, content }) => {
//     return <li><strong>{name}:</strong> {content}</li>
// }
