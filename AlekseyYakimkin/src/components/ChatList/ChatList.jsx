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
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import {AddChatForm} from './AddChatForm'
import {Header} from '../Header/Header'

import './ChatList.css'

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

export const ChatList = ({chats,headerName,handleAddChat}) => {
    //const classes = useStyles();
    console.log(handleAddChat);
    // console.log("ChatList return")
    return  <>
            <Header  headerName={headerName}/>
            <div className="">
                <AddChatForm addNewChat={handleAddChat}/>
                <Button   onClick={handleAddChat}>Add Chat</Button>
                <List >
                {/* component={props => <Link to="/chats/1"/>} */}
                    {/* {Object.keys(chats).forEach(index => { */}
                        {/* <ListItem key="0" component={Link} to="/chats/add">
                                <ListItemAvatar>
                                <Avatar alt="Add Chat" src="https://via.placeholder.com/40" />
                                </ListItemAvatar>
                                <ListItemText primary="Add Chat" secondary="" />
                        </ListItem> */}
                    {/* {Object.entries} */}
                    {Object.keys(chats).map((key, index) =>
                        <ListItem key={key} component={Link} to={chats[key].url}>
                                <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={chats[key].img} />
                                </ListItemAvatar>
                                <ListItemText primary={chats[key].name} secondary="Jan 9, 2014" />
                        </ListItem>)
                        
                    }
                    {/* {chats.map((key, index) => 
                    <ListItem key={index} component={Link} to={chats.key.url}>
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={item.img} />
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary="Jan 9, 2014" />
                    </ListItem>
                    )} */}
                </List>
            </div>
            </>
}