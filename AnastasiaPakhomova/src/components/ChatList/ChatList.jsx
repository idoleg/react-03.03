import React from "react"
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './ChatList.css'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import TextField from '@material-ui/core/TextField'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addChat} from '../../store/chatActions'


class ChatList extends React.Component {

	static propTypes = {
       chats: PropTypes.object.isRequired,
	   addChat: PropTypes.func.isRequired,
   }


   state = {
       input: ''
   }

   handleChange = (event) => {
       this.setState({ [event.target.name]: event.target.value })
   }

   handleKeyUp = (event) => {
       if (event.keyCode === 13) {
           this.handleAddChat()
       }
   }

   handleAddChat = () => {
       if (this.state.input.length > 0) {
           this.props.addChat(this.state.input)
           this.setState({ input: '' })
       }
   }

   render() {
       const { chats } = this.props;
       const chatElements = Object.keys(chats).map(id => (
           <Link key={ id } to={ `/chats/${id}` }>
               <ListItem alignItems="flex-start">
               	   <ListItemText primary={ chats[id].name }/>
               </ListItem>
            </Link>))

       return (
           <List className="chat-list">
            { chatElements }

           	<ListItem
             alignItems="flex-start"
             onClick={ this.handleAddChat }
             style={ { height: '60px' } }>
           	<TextField
             fullWidth
             name="input"
             label="Add new chat"
             onChange={ this.handleChange }
             value={ this.state.input }
             onKeyUp={ this.handleKeyUp }/>
           	</ListItem>

           </List>
       )
   }
}

const mapStateToProps = (store, props) => {

   return {
      chats: store.chats.chats
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
