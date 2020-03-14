import React from 'react';

export default class Message extends React.Component {
    render() {
        const { author, text } = this.props;

        return (
            <li className="content__message">
                <strong>{author.replace(/[a-zа-яё]/i, author[0].toUpperCase())}</strong>: {text}
            </li>
        );
    }
}