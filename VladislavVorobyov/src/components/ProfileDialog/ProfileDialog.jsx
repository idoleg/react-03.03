import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    link: {
        textDecoration: 'none',
        '&:visited': {
            color: 'inherit',
        }
    },
}));


export const ProfileDialog = ({config, open, handleClose, handleConfigUpdate}) => {
    const classes = useStyles();
    const [userName, setUserName] = useState(config.userName);
    const onSaveClick = (e) =>{
        const newConfig = {...config};
        newConfig.userName = userName;
        handleConfigUpdate(newConfig);
        handleClose();
    };
    const onChangeUserName = (e) => {
        setUserName(e.target.value)
    };

    return (
        <Dialog
            fullScreen
            open={open}
        >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Link className={classes.link} to={'/chats/'} onClick={handleClose}>
                        <IconButton edge="start" color="inherit" aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        Profile
                    </Typography>
                    <Link className={classes.link} to={'/chats/'} onClick={onSaveClick}>
                        <Button autoFocus color="inherit">
                            save
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <TextField
                        label="User Name"
                        value={userName}
                        onChange={onChangeUserName}
                    />
                </ListItem>
                <Divider />
            </List>

        </Dialog>
    )
};