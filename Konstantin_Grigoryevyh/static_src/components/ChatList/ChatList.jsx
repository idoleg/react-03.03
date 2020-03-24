import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default class ChatList extends React.Component {

    render() {
        return <div className="chat__chatlist">
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Chat1" />
                </ListItem>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Chat2" />
                </ListItemLink>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Chat3" />
                </ListItemLink>
            </List>
        </div>
    }
}