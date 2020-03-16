import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './ChatList.css';

export const ChatList = () => {
    return (<List className="ChatList">
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText primary="Family"
            secondary={
                <React.Fragment>
                <Typography component="span" variant="body1" color="textPrimary">
                    Mom:
                </Typography>
                {" Don't forget about the dinner tonight!"}
                </React.Fragment>
            }/>
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText primary="Work"
            secondary={
                <React.Fragment>
                <Typography component="span" variant="body1" color="textPrimary">
                    Dilan:
                </Typography>
                {" Of course! See ya on Sunday"}
                </React.Fragment>
            }/>
        </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText primary="Friends"
            secondary={
                <React.Fragment>
                <Typography component="span" variant="body1" color="textPrimary">
                to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
            }/>
        </ListItem>
      <Divider variant="inset" component="li" />
    </List>
    )
}
