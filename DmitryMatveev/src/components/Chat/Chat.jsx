import {Message} from '../Message/Message';
import {MessageList} from '../MessageList/MessageList';
import {FormForUser} from '../FormForUser/FormForUser';
import React from "react";
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Chat = ({isLoading,error,messages, onSendMessage}) => {
    if(isLoading) {
        return (<Grid container direction="row" justify="center" alignItems="center"> 
                    <CircularProgress /> 
                    <div>Сообщения загружаются</div>
                     </Grid>)
    }
    if(error) {
        return <div>Ошибка подключения</div>
    }
    if(messages){
        return (<div>
            {messages.length ? <MessageList messages={messages}/> : "Нет сообщений" }
            <FormForUser onSendMessage={onSendMessage}/>
        </div>);
    } else {
        return (
            <strong>Выберите чат в списке.</strong>
        )
    }
    
}

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired,
}