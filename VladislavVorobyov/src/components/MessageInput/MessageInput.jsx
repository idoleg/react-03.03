import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class MessageInput extends Component {

    static  propTypes = {
        author: PropTypes.string,
        handleNewMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        author: 'Anonimous',
    };

    state = {
        message: '',
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="message">Сообщение: </label>
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                />
            </form>
        )
    };

    handleChange = (e) => {
        this.setState({message: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {author, handleNewMessage} = this.props;
        const message = this.state.message;
        if (!message.length) {
            return;
        }
        handleNewMessage(message, author);
        this.setState({message: ''});
    }

}