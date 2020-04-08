import React from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './ChatList.css'
import {Link} from 'react-router-dom'


export const ChatList = () =>{

	return (
		<List className="chat-list">
     		<Link to="/chats/1">
      		<ListItem alignItems="flex-start">
        		<ListItemText primary='Chat 1'/>
      		</ListItem>
			</Link>
     		<Link to="/chats/2">
      		<ListItem alignItems="flex-start">
        		<ListItemText primary='Chat 2'/>
      		</ListItem>
			</Link>
     		<Link to="/chats/3">
      		<ListItem alignItems="flex-start">
        		<ListItemText primary='Chat 3'/>
      		</ListItem>
			</Link>
    	</List>

	)
}
