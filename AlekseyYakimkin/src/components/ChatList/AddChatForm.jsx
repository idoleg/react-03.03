import React, {useState, useRef, useEffect, Component} from 'react';
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'

function useInput(initialState) {
    const [state,setState] = useState(initialState)

    const setInput = (event) => {
        setState(event.currentTarget.value)
    }

    return [state,setInput]
}

export const AddChatForm = ({addNewChat}) => {
    const [name, setName] = useInput('')

    console.log(addNewChat)

    useEffect(() => {
        console.log("Page updated")
        //textarea.current.focus()  // ref={textarea} в <textarea>
    }, [])
    const onSubmit = (event) => {
        event.preventDefault()
        //if(content)
        addNewChat({name})
         
    }
    const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
            addNewChat({name})
        }
     };
    return  <form >
                <TextField name="name" label="Новый чат" placeholder="Добавить чат" value={name} onChange={setName}/>
                <Button variant="contained" color="primary"   onClick={onSubmit}>Add</Button>
            </form>
}

