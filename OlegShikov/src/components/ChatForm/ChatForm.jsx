import React, {useState, useRef, useEffect} from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useInput} from '../../hooks/useInput';

// export class ChatForm extends React.Component {
//     state = {
//         name: "Me",
//         content: ''
//     }

//     textarea = React.createRef();

//     componentDidMount() {
//         this.textarea.current.focus();
//     }

//     handleChange = (event) => {
//         const name = event.currentTarget.name;
//         const value = event.currentTarget.value;

//         this.setState((state) => ({
//             [name]: value,
//         }))
//     }

//     onSubmit = (event) => {
//         event.preventDefault();

//         const {name, content} = this.state;
//         this.props.onSendMessage({name, content});
//     }

//     render() {

//         return (<form onSubmit={this.onSubmit}> 
//             <input 
//                 name="name" 
//                 value={this.state.name} 
//                 onChange={this.handleChange}/>
//             <textarea 
//                 ref={this.textarea}
//                 required
//                 name="content" 
//                 placeholder="Введите наше сообщение..." 
//                 value={this.state.content} 
//                 onChange={this.handleChange}/>
//             <button>Отправить</button>
//         </form>);
//     }
// }



export const ChatForm = ({onSendMessage}) => {
    const [name, setName] = useInput('User');
    const [content, setContent, setContentState] = useInput('');
    
    const textarea = useRef();

    // useEffect(() => {
    //     textarea.current.focus();
    // }, [])

    const onSubmit = (event) => {
        // event.preventDefault();
        onSendMessage({name, content});
        setContentState('');
        textarea.current.focus();
    }  

    return (<form> 
            <TextField 
                variant="outlined"
                label="Имя"
                name="name" 
                value={name} 
                onChange={setName}/>
            <TextField
                inputRef={textarea}
                variant="outlined"
                label="Сообщение"
                autoFocus
                multiline
                required
                name="content" 
                placeholder="Введите наше сообщение..." 
                value={content} 
                onChange={setContent}/>
            <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
            >
                Send
            </Button>
        </form>);
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
}