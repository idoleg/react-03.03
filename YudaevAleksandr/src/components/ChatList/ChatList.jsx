import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';
import {useInput} from "../../hooks/useInput";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        maxWidth: drawerWidth,
        width: '10%',
        flexShrink: 0,
        minWidth: 180,
    },
    drawerPaper: {
        maxWidth: drawerWidth,
        width: '10%',
        minWidth: 180,
    },
    toolbar: theme.mixins.toolbar,
}));

export const ChatList = ({chats, createChat}) => {
    //console.log(chats);
    const classes = useStyles();
    const [name, setName, setNameState] = useInput('');

    const handleAddChat = (event) => {
        event.preventDefault();
        createChat(name);
        setNameState('');
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {chats.map(({id, name}) => (
                    <Link to={id} key={id}>
                        <ListItem button>
                            <ListItemIcon>{<MailIcon/>}</ListItemIcon>
                            <ListItemText primary={name}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <form onSubmit={handleAddChat}>
                <input value={name} onChange={setName}/>
                <button>add</button>
            </form>
        </Drawer>
    )
};