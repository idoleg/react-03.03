import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';

class ChatListItem extends Component {
  state = { blink: false };

  blink = () => {
    this.setState(state => ({ blink: !state.blink }));

    setTimeout(this.blink, 500);
  };

  componentDidMount() {
    this.blink();
  }

  render() {
    const { classes, blinkings, handler, deleteHandler, id } = this.props;

    return (
      <ListItem
        className={blinkings && this.state.blink ? classes.itemBlink : classes.item}
        onDoubleClick={deleteHandler(id)}
      >
        <ListItemAvatar>
          <Avatar onClick={handler(id)}></Avatar>
        </ListItemAvatar>
        <ListItemText onClick={handler(id)} primary={this.props.title} secondary={null} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(ChatListItem);
