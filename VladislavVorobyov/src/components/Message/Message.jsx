import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    message: {
        backgroundColor: 'lightskyblue',
        padding: 10,
        margin: 10,
        listStyle: 'none',
        width: '30%',
        borderRadius: 5,
        alignSelf: 'flex-start',

    },
    messageCurrentUser: {
        alignSelf: 'flex-end',
    },
}));


export const Message = ({author, content, currentUser}) => {
    const classes = useStyles();
    const name = author === currentUser ? 'Me': author;
    const className = `${classes.message} ${name === 'Me'?classes.messageCurrentUser:''}`;
    return (
        <li className={className}>
            <strong>{name}</strong>
            <pre>{content}</pre>
        </li>
    )
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    currentUser: PropTypes.string,
};

Message.defaultProps = {
    currentUser: 'Vladislav',
};
