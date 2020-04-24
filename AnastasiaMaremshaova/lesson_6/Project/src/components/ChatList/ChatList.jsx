import React from "react";
import List from '@material-ui/core/List';
import {ChatItem} from './ChatItem';
import {useStyles} from './useStyles';
import {makeStyles} from '@material-ui/core/styles';


export const useStylesText = makeStyles({
    root: props => ({

        '& .MuiTypography-root': {
            marginTop: 50
        }
    })
})

export const ChatList = (
    {isLoading, error, chats, openedEditNameChat, classOpenFormCreateChat, OnDeleteChat, OnSaveNameChat,
         OnSetFill, OnOpenEditNameChat, OnExitEditNameChat}
) => {

  
    const classes = useStyles();

    
    return (
        
        <div className={'ChatList ' + classOpenFormCreateChat + 'ChatList'}>
            <div className='ChatList-container'>
                <List
                    className="list"
                    classes={{
                        padding: classes.MuiListPadding
                    }}>
                    {
                        Object
                            .keys(chats)
                            .reverse()
                            .map((id) => (
                                
                                <ChatItem  id={id} chats={chats} openedEditNameChat={openedEditNameChat} OnDeleteChat={OnDeleteChat} 
                                OnSaveNameChat = {OnSaveNameChat} OnSetFill={OnSetFill} OnOpenEditNameChat={OnOpenEditNameChat}
                                OnExitEditNameChat={OnExitEditNameChat} key={id}/>
                            ))
                    }
                </List>

            </div>

        </div>
    )

}
