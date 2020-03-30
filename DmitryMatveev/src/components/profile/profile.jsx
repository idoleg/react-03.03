import React from "react";
import {useInput} from '../../hooks/useInput';;
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));


function Profile()  {
  const [name, setName, setNameState] = useInput('');
const handleAddPost = (event) => {
  event.preventDefault();
  setNameState('');
}
  const classes = useStyles();
      return (
        <Grid container direction="row" justify="center" alignItems="center">
        <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.large}>
              P
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Pall' secondary='Moscow' />
        </ListItem>
      </List>
      <form onSubmit={handleAddPost}>
                    <TextField 
                        variant="outlined"
                        label="пост"
                        name="chat" 
                        value={name}
                        required 
                        onChange={setName}/>
                    <Button 
                        className="chat__submit" 
                        type="submit"
                        color="primary"
                        variant="contained" > 
                        Post                    </Button>
                </form>
      </Grid>
      );
}
export default Profile;