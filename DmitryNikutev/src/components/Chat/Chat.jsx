import React from "react";
import {Link} from "react-router-dom";
import {CHATS_PATH} from "../../utils/Constants";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import "./Chat.css";


export const Chat = ({chat, chatId, selected}) => {
   return (
      <Link to={CHATS_PATH + "/" + chatId} className="ChatLink" replace>
         <ListItem
            alignItems="flex-start"
            selected={selected}>
            <ListItemAvatar>
               <Avatar alt={chat.name} src={chat.avatar}/>
            </ListItemAvatar>
            <ListItemText
               primary={chat.name}
               secondary={<>
                  <Typography
                     component="span"
                     variant="body2"
                     className="LastMessageText"
                     noWrap>
                     {chat.messages && chat.messages.size ?
                        [...chat.messages.values()].last().text :
                        "No messages yet"}
                  </Typography>
               </>}
            />
         </ListItem>
      </Link>
   )
};
