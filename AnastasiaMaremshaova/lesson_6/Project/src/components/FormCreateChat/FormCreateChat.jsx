import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './FormCreateChat.css';
import {useStylesTextField, useStylesBtn} from './useStyles';
import {createChat} from '../../store/chatOperations.js';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

export const FormCreateChat = ({id, classOpenFormCreateChat, onSetClassOpenFormCreateChat, createChat}) => {

    const classesTextField = useStylesTextField(); 
    const classesBtn = useStylesBtn(); 

    const [name, setName] = useState('');

    const clearValue = (event) =>{
        setName('');
    };

    const onCreateChat =() => {
        createChat(id, name); 
    };



    return (
        <form className={"formCreateChat " + classOpenFormCreateChat} autoComplete="off">
            <TextField
                classes={{root: classesTextField.root}}
                id="standard-basic"
                label="Новое название чата"
                name="name"
                value={name}
                onChange={(event) => {setName(event.target.value)}}
                onKeyPress={(event) => {
                    if (event.key === 'Enter'){
                        event.preventDefault ? event.preventDefault() : event.returnValue = false;
                        if (name!= ''){
                            this.onCreateChat.bind(this)
                        clearValue(); 
                        onSetClassOpenFormCreateChat();
                    }
                }
            }}  
                />
               
            <Button 
                classes={{root: classesBtn.root}}
                className = 'btn-save'
                data-title="Save"
                onClick={(event)=>{
                    this.onCreateChat.bind(this)
                   
                    clearValue(); 
                    onSetClassOpenFormCreateChat();
                
                }}>
                   <img src="src/img/save.svg" alt="img-save" className="img-save"/>
                   </Button>
            <Button
            onClick={() => {
                clearValue(); 
                onSetClassOpenFormCreateChat();
            }}
             classes={{root: classesBtn.root}}
             className = 'btn-cancel'
                data-title="Cancel">
                <img src="src/img/cancel.svg" alt="img-cancel" className="img-cancel"/>
            </Button>
        </form>
    );
}

const mapStateToProps = (store, props) => {
    console.log(props)
    const classOpenFormCreateChat = props.classOpenFormCreateChat;
    const onSetClassOpenFormCreateChat = props.onSetClassOpenFormCreateChat
    const id = Number(store.chats.state.countChats) + 1; 
    return {id, classOpenFormCreateChat,  onSetClassOpenFormCreateChat }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    createChat
}, dispatch);



export default  connect(mapStateToProps, mapDispatchToProps)(FormCreateChat);