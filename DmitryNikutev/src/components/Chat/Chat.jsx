import React from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import "./Chat.css";

export const Chat = ({name, lastMessage, avatar, selected}) => {
   return (
      <ListItem
         alignItems="flex-start"
         selected={selected}>
         <ListItemAvatar>
            <Avatar alt="bot avatar" src={avatar}/>
         </ListItemAvatar>
         <ListItemText
            primary={name}
            secondary={<>
               <Typography
                  component="span"
                  variant="body2"
                  className="SecondaryText">
                  {lastMessage}
               </Typography>
            </>}
         />
      </ListItem>
   )
};
