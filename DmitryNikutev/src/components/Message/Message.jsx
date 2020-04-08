import React from "react";
import classname from "classname";

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import "./Message.css";


export const Message = ({name, text, automated}) => {
   const classes = useStyles();
   const className = classname("Message", {"Message--robot": automated});
   return (
      <li className={className}>
         <Paper variant="outlined" className="MessageBody">
               <Typography className={classes.name} color="textSecondary" gutterBottom noWrap>
                  {name}
               </Typography>
               <Typography className={classes.text} variant="body2" component="p" display="block">
                  {text}
               </Typography>
         </Paper>
      </li>
   );
};

const useStyles = makeStyles({
   name: {
      fontSize: 14,
   },
   text: {
      fontSize: 16,
      wordBreak: "break-word",
},
});
