import React from 'react';

export class Message extends React.Component {
    render() {
        return (
            <li>
                <strong>{this.props.author}</strong> say: {this.props.content}
            </li>
        );
    }
}
