import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const drawerWidth = 280;

export const ChatForm = ({active, onSendMessage, onKeyDown}) => {
    const useStyles = makeStyles(theme => ({
        input: {
            width: `calc(100% - 110px)`,
            marginBottom: '10px',
        },
        button: {
            margin: theme.spacing(1),
        },
        form: {
            width: `calc(100% - ${drawerWidth}px)`,
            position: 'absolute',
            bottom: '0',
            display: 'flex',
            alignItems: 'flex-end',
        },
    }));
    const classes = useStyles();
    const [content, setContent] = useState();

    return (
        <div className={classes.form}>
            <TextField
                disabled={active}
                autoFocus
                id="standard-multiline-flexible"
                placeholder="Input here your message"
                multiline
                rowsMax="4"
                className={classes.input}
                value = {content}
                name = "content"
                onChange={({currentTarget: {value}}) => setContent(value)}
                onKeyDown={(e) => {
                    if(e.ctrlKey && e.keyCode === 13) {
                        onKeyDown(e, content);
                        setContent('');
                    }
                }}
            />
            <Button
                disabled={active}
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
                onClick={() => {
                    if(content) {
                        onSendMessage(content);
                        setContent('');
                    }
                }}
            >
                Send
            </Button>
        </div>
    )
};

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};