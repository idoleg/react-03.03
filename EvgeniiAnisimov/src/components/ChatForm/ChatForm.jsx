import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

function useInput(initialState) {
  const [state, setState] = useState(initialState);
  const setInput = (event) => {
    setState(event.currentTarget.value);
  }

  return [state, setInput];
}

export const ChatForm = ({onSendMessage}) => {
  // const [name, setName] = useState('user');
  // const [content, setContent] = useState('');
  const [name, setName] = useInput('');
  const [content, setContent] = useInput('');
  // const textarea = useRef();

  const onSubmit = (event) => {
    // event.preventDefault();
    if(content !== '') {
      onSendMessage({name, content});
    } else {
      alert("Введите текст сообщения!")
    }
  }

  // useEffect(() => {
  //   // console.log("i'm updated!");
  //   textarea.current.focus();
  // }, [])

  return(
    <form onSubmit={onSubmit}>
      <TextField
        label="Имя пользователя"
        variant="outlined"
        required
        name="name"
        placeholder="Введите свое имя"
        value={name}
        onChange={setName}/>
      <TextField
        // ref={textarea}
        autoFocus
        multiline
        label="Сообщение"
        variant="outlined"
        required
        name="content"
        placeholder="Введите сообщение"
        value={content}
        onChange={setContent}/>
      <Button
        onClick = {onSubmit}
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        >Send
        </Button>
    </form>
  )
}

// export class ChatForm extends React.Component{
//   state = {
//     name: 'user',
//     content: '',
//   }
//
//   textarea = React.createRef();
//
//   componentDidMount() {
//     this.textarea.current.focus();
//   }
//
//
//   handleChange = (event) => {
//     const name = event.currentTarget.name;
//     const value = event.currentTarget.value;
//
//     this.setState((state) => ({[name]: value,}))
//   }
//
//   onSubmit = (event) => {
//     event.preventDefault();
//
//     const {name, content} = this.state;
//     this.props.onSendMessage({name, content});
//   }
//
//   render() {
//     return(
//       <form onSubmit={this.onSubmit}>
//         <input
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChange}/>
//         <textarea
//           ref={this.textarea}
//           required
//           name="content"
//           placeholder="Input message"
//           value={this.state.content}
//           onChange={this.handleChange}/>
//         <button>Send message</button>
//       </form>
//     )
//   }
// }

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
}
