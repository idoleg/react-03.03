import React, {useState, useRef, useEffect, Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import {useInput} from '../../hooks/useInput'

// function useInput(initialState) {
//     const [state,setState] = useState(initialState)

//     const setInput = (event) => {
//         setState(event.currentTarget.value)
//     }

//     return [state,setInput]
// }

export const DeleteChatForm = ({deleteChat,id}) => {
    //const [name, setName, setNameState] = useInput('')

    console.log(deleteChat)
    // useEffect(() => {
    //     console.log("Page updated")
    //     //textarea.current.focus()  // ref={textarea} в <textarea>
    // }, [])
    const onSubmit = (event) => {
        event.preventDefault()
        //if(content)
        deleteChat({id})
        //setNameState('') 
    }
    return  <form >
                <Button variant="contained" color="primary"   onClick={onSubmit}>Delete</Button>
            </form>
}

