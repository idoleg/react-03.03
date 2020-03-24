import styles from './chat-list.scss';
import classnames from 'classnames/bind';
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Box} from "@material-ui/core";

const cx = classnames.bind(styles);

export const ChatList = ({ items = [], containerClassName }) => {
  return (
    items &&
      <Box py={1} px={2} className={cx('container', containerClassName)}>
        <List>
          {items.map(({name}, index) => (
              <ListItem
                className={cx('item')}
                key={index}
              >
                {name}
              </ListItem>
              )
          )}
        </List>
      </Box>
  );
};

export default ChatList;