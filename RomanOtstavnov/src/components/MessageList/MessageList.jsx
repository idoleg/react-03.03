import styles from './message-list.scss';
import classnames from 'classnames/bind';
import React, { useEffect, useRef } from 'react';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {MESSAGE_TYPE} from "../../constants";
import {Box} from "@material-ui/core";

const cx = classnames.bind(styles);

export const MessageList = ({ messages, className }) => {
  const containerRef = useRef();
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);
  return (
    <Box py={1} px={2} className={cx('container', className)} ref={containerRef}>
      <List>
        {messages.map(({name, content, type}, index) => (
            <ListItem
              className={cx(
                'item',
                {'align-right': type === MESSAGE_TYPE.ai}
              )}
              key={index}
            >
              <ListItemText
                primary={content}
                secondary= {name}
              />
            </ListItem>
            )
        )}
      </List>
    </Box>
  );
};

export default MessageList;