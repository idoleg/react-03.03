import React from 'react';
import PropTypes from 'prop-types';
import {Message} from "Components/Message/Message";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    messageList: {
        display: 'flex',
        overflow: 'auto',
        padding: 20,
        flexDirection: 'column',
    },
}));


export const MessageList = ({messages}) => {
    const classes = useStyles();

    return (
        <ul className={classes.messageList}>
            {
                Object.entries(messages).map(([id,message]) => (
                    <Message {...message}
                             key={id} />)
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

// MessageList.propTypes = {
//     messages: PropTypes.arrayOf(messageProps).isRequired,
//     currentUser: PropTypes.string,
// };
//
// Message.defaultProps = {
//     currentUser: Message.defaultProps.currentUser,
// };