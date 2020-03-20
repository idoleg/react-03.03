import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}));

export const ChatList = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {/*{['RobotAlex', 'Sarah', 'Michael'].map((text, index) => (*/}
                {/*    <ListItem button key={index}>*/}
                {/*        <ListItemIcon>{<MailIcon />}</ListItemIcon>*/}
                {/*        <ListItemText primary={text} />*/}
                {/*    </ListItem>*/}
                {/*))}*/}
                <Link to="1">
                    <ListItem button>
                        <ListItemIcon>{<MailIcon />}</ListItemIcon>
                        <ListItemText primary="RobotAlex" />
                    </ListItem>
                </Link>
                <Link to="2">
                    <ListItem button>
                        <ListItemIcon>{<MailIcon />}</ListItemIcon>
                        <ListItemText primary="Sarah" />
                    </ListItem>
                </Link>
                <Link to="3">
                    <ListItem button>
                        <ListItemIcon>{<MailIcon />}</ListItemIcon>
                        <ListItemText primary="Michael" />
                    </ListItem>
                </Link>
                <Link to="4">
                    <ListItem button>
                        <ListItemIcon>{<MailIcon />}</ListItemIcon>
                        <ListItemText primary="no chat" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
};