import React, {useState, useRef} from "react"
import PropTypes from "prop-types"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import './ChatForm.css'
import {useInput} from '../../hooks/useInput'

//function useInput(initialState) {
//	const [state, setState] = useState(initialState)
//
//	const setInput = (event) => {
//        setState(event.currentTarget.value)
//    }
//
//    return [state, setInput]
//}


export const ChatForm = ({onSendMessage}) => {

	const [name, setName] = useInput('user')
	const [text, setText] = useInput('')

	const inputText = useRef()
	const inputName = useRef()


	function checkFields () {
		if(text && name) {
			onSendMessage({name, text})
			setText({currentTarget: { value: ''}})
			inputText.current.focus()

		}
		if(text && !name) {
			inputName.current.focus()
			return false
		}
		else {
			inputText.current.focus()
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
		 	inputRef={inputName}
		 	label="Name"
		 	variant="outlined"
			value={name}
			onChange={setName}
			onKeyDown = {onKeyDown}/>

			<TextField
			inputRef={inputText}
			autoFocus
			multiline
		 	label="Type your message"
		 	variant="outlined"
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
