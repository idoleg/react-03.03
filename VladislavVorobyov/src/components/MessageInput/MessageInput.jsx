import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
    },
    input: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));

export const MessageInput = ({handleNewMessage}) => {
    const classes = useStyles();
    const [content, setContent] = useState('');
    const sendMessage = () =>{
        handleNewMessage(content);
        setContent('');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };
    const onKeyUp = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) sendMessage();
    };
    const onChange = (event) => {
        setContent(event.currentTarget.value)
    };


    return (
            <form  className={classes.root} onSubmit={onSubmit}>
                <TextField
                    className={classes.input}
                    id="message-input"
                    placeholder="Введите ваше сообщение..."
                    variant="outlined"
                    rowsMax="4"
                    value={content}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    multiline
                    autoFocus
                />

                <IconButton
                    className={classes.iconButton}
                    variant="contained"
                    color="primary"
                >
                    <Icon>send</Icon>
                </IconButton>
            </form>
    )
};


MessageInput.propTypes = {
    handleNewMessage: PropTypes.func.isRequired,
};