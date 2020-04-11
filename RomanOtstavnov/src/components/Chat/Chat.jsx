import styles from './chat.scss';
import classnames from 'classnames/bind';
import React, { useRef }  from 'react';
import ChatList from "../../components/ChatList/ChatList";
import MessageForm from "../../components/MessageForm/MessageForm";
import MessageList from "../../components/MessageList/MessageList";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const cx = classnames.bind(styles);

export const Chat = ({
  chats = [],
  chatId,
  activeChat,
  addMessage,
  addChat,
}) => {
  const messageListRef = useRef();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <ChatList
          containerClassName={cx('chat-list')}
          items={chats}
          addChat={addChat}
        />
        <Box py={1} px={2} className={cx('message-field')} ref={messageListRef}>
          {activeChat && activeChat.messages.length
            ?(
              <MessageList messages={activeChat.messages} containerRef={messageListRef} />
            ) : (
              <Typography>{chatId ? 'Сообщений нет' : 'Выберите чат'}</Typography>
            )
          }
        </Box>
      </div>
      <div className={cx('footer')}>
        {Boolean(chatId) && <MessageForm addMessage={addMessage} />}
      </div>
    </div>
  );
};

export default Chat;
