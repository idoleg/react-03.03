import styles from './chat-list.scss';
import classnames from 'classnames/bind';
import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Box} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import isFunction from 'lodash/isFunction';
import TextField from "@material-ui/core/TextField";

const cx = classnames.bind(styles);

export const ChatList = ({ items, containerClassName, addChat }) => {
  const [chatName, setChatName] = useState('');

  const sendForm = (e) => {
    e.preventDefault();
    if(chatName){
      isFunction(addChat) && addChat({ name: chatName });
      setChatName('');
    }
  };

  return (
    items &&
      <Box py={1} px={2} className={cx('container', containerClassName)}>
        <List>
          {items.map(({name, id}, index) => (
            <ListItem key={index}>
              <NavLink
                to={`/chats/${id}`} exact
                activeClassName={cx('active')}
                className={cx('link')}
              >
                {name}
              </NavLink>
            </ListItem>
          ))}
          <ListItem>
            <form
              className={cx('form')}
              onSubmit={sendForm}
            >
              <TextField
                label='Добавить чат'
                variant='outlined'
                name='chatName'
                type='text'
                value={chatName}
                onChange={({target}) => setChatName(target.value)}
                autoComplete='off'
                size='small'
              />
            </form>
          </ListItem>
        </List>
      </Box>
  );
};

export default ChatList;
