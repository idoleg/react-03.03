import React from 'react';
import ChatContainer from '../containers/ChatContainer'
import ChatListContainer from '../containers/ChatListContainer'

export const Layout = ({match}) => {
    console.log(match)
    const id = match.params && match.params.id ? match.params.id : undefined
    return(
        <>
            <ChatListContainer idChat={id} />
            <ChatContainer match={match}/>
        </>
    )
}