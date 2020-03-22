import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import './ChatList.css'

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

export const ChatList = ({chats}) => {
    //const classes = useStyles();
    return  <div className="">
                 <List >
                    
                    {chats.map((item, index) => <ListItem key={index}>
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.img} />
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary="Jan 9, 2014" />
                    </ListItem>
                    )}
                </List>
            </div>
}