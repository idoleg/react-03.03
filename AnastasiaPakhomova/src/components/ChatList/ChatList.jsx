import React from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './ChatList.css'


export const ChatList = () =>{

	return (
		<List className="chat-list">
      		<ListItem alignItems="flex-start">
        		<ListItemText primary='Chat 1'/>
      		</ListItem>
      		<ListItem alignItems="flex-start">
        		<ListItemText primary='Chat 2'/>
      		</ListItem>
      		<ListItem alignItems="flex-start">
        		<ListItemText primary='Chat 3'/>
      		</ListItem>
    	</List>

	)
}
