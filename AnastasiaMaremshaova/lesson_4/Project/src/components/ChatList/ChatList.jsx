import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './ChatList.css'


const useStyles = makeStyles({
  root: {
    marginLeft: 35,
    marginTop: 20
}})


export const ChatList = ({chats, createNewChat}) =>{
  const classes = useStyles();
  return(
  <div className='ChatList'>
  <List>
    {
        Object.keys(chats).map((id) =>(
          <div className="chat"  key={id}>
        <ListItem alignItems="flex-start" component={Link} to={`/chats/${id}`}  key={id}>
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://avatars.mds.yandex.net/get-pdb/1211668/17b85b01-aef6-44aa-a372-945911d8600f/s1200" />
        </ListItemAvatar>
        <ListItemText
          primary={chats[id].name}
          secondary={
            <React.Fragment>
              <Typography
              className="White"
                component="span"
                variant="body2">
                {chats[id].messages[chats[id].messages.length - 1].name}
              </Typography>
              {chats[id].messages[chats[id].messages.length - 1].content}
            </React.Fragment>
          }
        />
          
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
    
  ))}
      </List> 

      <Button
      classes={{
        root: classes.root
      }}
                className="btn-addNewChat"
                variant="contained"
                color="primary"
                onClick={()=>{
                    createNewChat(); 
                }
                }
            >
                Добавить новый чат
            </Button>
      </div>)

}