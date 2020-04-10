import React, {useState, useRef} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './ChatList.css'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createChat} from '../../store/chatOperations'
import {useInput} from '../../hooks/useInput'


export const ChatList = ({isLoading, error, chats, createChat}) => {
    const [name, setName, setNameState] = useInput('')

    const handleAddChat = (event) => {
        createChat(name)
        setNameState('')
    }

	const handleKeyDown = (event) => {
       if (event.keyCode === 13) {
		   event.preventDefault()
           handleAddChat()
       }
   }

	if(isLoading) {
        return <div>Чаты загружаются</div>
    }
    if(error) {
        return null
    }

	const chatElements = chats.map(({id, name, fire}) =>
           <Link key={ id } to={ "/chats/" + id  }>
               <ListItem alignItems="flex-start">
               	   <ListItemText primary={ name }/>
               	   {" "}
               	   {fire && <strong>New messages</strong>}
               </ListItem>
            </Link>)

    return (
		<List className="chat-list">
           {chatElements}
         	<ListItem
             alignItems="flex-start"

             style={ { height: '60px' } }>
           	<TextField
             fullWidth
             name="input"
             label="Add new chat"
             onChange={ setName }
             value={ name }
             onKeyDown = {handleKeyDown}/>
           	</ListItem>
        </List>
    )
}

