import React, {useState, useRef, useEffect} from "react"
import PropTypes from "prop-types"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import './ChatForm.css'


function useInput(initialState) {
	const [state, setState] = useState(initialState)

	const setInput = (event) => {
        setState(event.currentTarget.value)
    }

    return [state, setInput]
}


export const ChatForm = ({onSendMessage}) => {

	const [name, setName] = useInput('user')
	const [text, setText] = useInput('')

	function checkFields () {
		if(text && name) {
			onSendMessage({name, text})
			setText({currentTarget: { value: ''}})
			document.getElementById('text-field').focus()

		}
		if(text && !name) {
			document.getElementById('name-field').focus()
			return false
		}
		else {
			document.getElementById('text-field').focus()
			return false
		}
	}


	const onSubmit = (event) => {
		event.preventDefault()
		checkFields ()
	}


	const onKeyDown = (event) => {
        if (event.keyCode === 13) {
			event.preventDefault()
			checkFields()
        }
    }


	return (
		<form>
		 	<TextField
		 	id="name-field"
		 	label="Name"
		 	variant="outlined"
			name="name"
			value={name}
			onChange={setName}
			onKeyDown = {onKeyDown}/>

			<TextField
			id="text-field"
			autoFocus
			multiline
		 	label="Type your message"
		 	variant="outlined"
			name="text"
			value={text}
		 	onChange={setText}
			onKeyDown = {onKeyDown}/>

			<Fab
			className="btn-send"
			variant="extended"
			color="primary"
			onClick={onSubmit}>
			Send message
			</Fab>
		</form>
	)
}

ChatForm.propTypes = {
	onSendMessage: PropTypes.func.isRequired
}
