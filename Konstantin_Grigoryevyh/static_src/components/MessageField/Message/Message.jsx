import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    };


    render() {
        return <div className={"message-item " + this.props.className}><div className="message-item__text"><b>{ this.props.name }</b> : { this.props.text }</div></div>
    }
}