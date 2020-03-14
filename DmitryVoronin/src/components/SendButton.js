import React from 'react';

export default class SendButton extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <button className="content__submit" type="submit">
                {text}
            </button>
        );
    }
}
