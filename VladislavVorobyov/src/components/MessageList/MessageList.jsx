import React from 'react';
import PropTypes from 'prop-types';
import {Message} from "Components/Message/Message";

// export class MessageList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 { this.props.messages.map(message => <Message {...message} key={message.id}/>) }
//             </ul>
//         );
//     }
// }


export const MessageList = ({messages, currentUser}) => {
    return (
        <ul className="message-list">
            {
                messages.map(message => (<Message {...message}
                                                  currentUser={currentUser}
                                                  key={message.id} />)
                )
            }
        </ul>
    )
};

export const messageProps = PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
});

MessageList.propTypes = {
    messages: PropTypes.arrayOf(messageProps).isRequired,
    currentUser: PropTypes.string,
};

Message.defaultProps = {
    currentUser: Message.defaultProps.currentUser,
};