import React from 'react';
import {Chat} from "../Chat/Chat";
import {ERROR, FETCHING, SUCCESS} from "../../utils/Constants";

import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from '@material-ui/core/CircularProgress';

import "./ChatList.css"

export const ChatList = ({chats, loading, selectedChat, addChat}) => {
   return (<>
      {loading.state === FETCHING &&
      <CircularProgress/>
      }

      {loading.state === ERROR &&
      <div>
         Error while fetching chats <br/>
         {loading.message}
      </div>
      }

      {loading.state === SUCCESS &&
      <List className="ChatList">
         {[...chats.keys()].map(key => (
            <Chat chat={chats.get(key)} chatId={key} selected={key === selectedChat} key={key}/>
         ))}
         <ListItem>
            <Button
               variant="text"
               onClick={addChat}>
               <AddIcon/>
            </Button>
         </ListItem>
      </List>
      }

   </>)
};
