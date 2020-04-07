import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

import Button from '@material-ui/core/Button';
import {useStyles} from './useStyles'

import './ChatList.css'


export const ChatList = ({chats, classOpenFormCreateChat}) => {
    const classes = useStyles();
    
    return (
        <div className={'ChatList '+ classOpenFormCreateChat+'ChatList'}>
            <div className='ChatList-container' scrolling="auto">
                <List classes={{padding: classes.MuiListPadding}}>
                    {
                        Object.keys(chats).map((id) => (
                                <div className="chat" key={id}>
                                    <ListItem
                                    
                                    classes={{root: classes.MuiListItemRoot}} 
                                    alignItems="flex-start"
                                     component={Link}
                                      to={`/chats/${id}`}
                                       key={id}
                                        >
                                        <ListItemAvatar>
                                            <Avatar
                                                 classes={{
                                                    root: classes.MuiAvatarRoot, img: classes.MuiAvatarImg
                                                }}
                                                className="avatar"
                                                alt="Remy Sharp"
                                                 src="src/img/lapa.svg"/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            classes={{multiline: classes.MuiListItemTextMultiline, primary: classes.MuiTypographyBody1,
                                            secondary: classes.MuiTypographyBody2}}
                                            primary={chats[id].name}
                                            secondary={
                                                <React.Fragment >
                                                    <Typography
                                                    classes={{root: classes.MuiTypographyRoot, body2: classes.MuiTypographyBody2 }}
                                                    className="White"
                                                    component="span"
                                                    variant="body2">
                                                    {
                                                        chats[id].messages[chats[id].messages.length - 1].name 
                                                    }:
                                                </Typography>
                                                {
                                                chats[id].messages[chats[id].messages.length - 1].content.substr(0, 22)
                                            }</React.Fragment>
                                            }/>

                                            <Button className="btn-menu" classes={{root: classes.root}}>
                                                <img src="src/img/menu.svg" alt="" className="img-menu"/>
                                            </Button>
                                    </ListItem>
                                    <Divider variant="inset" component="li" classes={{inset:classes.MuiDividerInset}}/>
                                </div>
                            ))
                    }
                </List>
            </div>

        </div>
    )

}