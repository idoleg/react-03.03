import React, {useState, useRef, useEffect, Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import {useInput} from '../../hooks/useInput'

// export class ChatForm extends Component{
//     state = {
//         name: "",
//         content: ""
//     }

//     textarea = React.createRef()

//     componentDidMount() {
//         this.textarea.current.focus()
//     }

//     handleChange = (event) => {
//         const name = event.currentTarget.name
//         const value = event.currentTarget.value

//         this.setState((state) => ({
//             [name]: value,

//         })) 
//     }

//     onSubmit = () => {
//         event.preventDefault()
//         //if(content)
//         const {name, content} = this.state
//         this.props.onSendMessage({name, content})
//     }
//     render() {
//         return(<form onSubmit={this.onSubmit}>
//             <input name="name" placeholder="Введите имя" value={this.state.name} onChange={this.handleChange}/>
//             <textarea ref={this.textarea} required name="content" placeholder="Текст" value={this.state.content} onChange={this.handleChange}/>
//             <button>Отправить</button>
//         </form>)
//     }
// }

export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useInput('Alex')
    const [content, setContent, setContentState] = useInput('')
    const textarea = useRef();

    useEffect(() => {
        console.log("Page updated")
        //textarea.current.focus()  // ref={textarea} в <textarea>
    }, [])
    const onSubmit = (event) => {
        event.preventDefault() //comment for test
        //if(content)
        onSendMessage({name, content})
        setContentState('')
        textarea.current.focus()  //comment for test
    }
    const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            onSendMessage({name, content})
        }
     };
    return  <form >
                <TextField name="name" label="Имя" placeholder="Введите имя" value={name} onChange={setName}/>
                <TextField inputRef={textarea} autoFocus multiline variant="outlined" label="Сообщение" required name="content" placeholder="Текст" value={content} onChange={setContent} onKeyUp={ (event) => handleKeyUp(event) }/>
                <Button variant="contained" color="primary"  endIcon={<Icon>send</Icon>} onClick={onSubmit}>Send</Button>
            </form>
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
};