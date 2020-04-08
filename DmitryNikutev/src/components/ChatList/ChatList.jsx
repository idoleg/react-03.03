import React from 'react';
import {Chat} from "../Chat/Chat";

import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import "./ChatList.css"


export const ChatList = ({chats, selectedChat, addChat}) => {
   return (
      <List className="ChatList">
         {[...chats.keys()].map(key => (
            <Chat chat={chats.get(key)} chatId={key} selected={key === selectedChat} key={key}/>
         ))}
         <ListItem>
            <Button
               variant="text"
               onClick={addChat}>
               <AddIcon />
            </Button>
         </ListItem>
      </List>
   );
};
