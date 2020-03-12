import React from "react";
import classname from "classname";

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import "./Message.css";


export const Message = ({name, text, automatic}) => {
   const classes = useStyles();
   const className = classname("Message", {"Message--robot": automatic});
   return (
      <li className={className}>
         <Paper variant="outlined" className="MessageBody">
               <Typography className={classes.name} color="textSecondary" gutterBottom>
                  {name}
               </Typography>
               <Typography className={classes.text} variant="body2" component="p">
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
   },
});
