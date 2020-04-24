import React from "react";
import {connect} from 'react-redux';
import './Profile.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {bindActionCreators} from 'redux'
import {saveChangesProfileData} from '../../store/chatActions'
import {useState, useEffect, useRef} from "react";
import {useStyles, useStylesTextField, useStylesBtnBack} from './useStyles'

export const Profile = ({name, classOpenProfile, exitProfile, onSaveChangesProfileData}) => {


    const [flagShowBtnEdit, setFlagShowBtnEdit] = useState('');
    const [flagShowBtnSave, setFlagShowBtnSave] = useState('none');
    const [classEdit, setClassEdit] = useState('readonly');
    const [nameSave, setName] = useState('');
 
    const [flagEdit, setFlagEdit] = useState('none');
    const textInput = useRef(); 

    useEffect(() => {
        setName(name);
       
    }, [name])

    const propsBtn = {
        flagShowBtnSave: flagShowBtnSave,
        flagShowBtnEdit: flagShowBtnEdit
    };

    const propsEdit = {
        flagEdit: flagEdit
    };

    const classesBtnBack = useStylesBtnBack(); 
    const classes = useStyles(propsBtn);
    const classesTextField = useStylesTextField(propsEdit); 
    return (
        <div className={'Profile ' + classOpenProfile}>
            <div className="consoleProfile">
                <Button
                data-title="ChatList"
                classes={{root: classesBtnBack.root}}
                    variant="contained"
                    onClick={() => {
                        exitProfile();
                        setFlagShowBtnEdit('')
                        setFlagShowBtnSave('none');
                        setClassEdit('readonly');
                        setFlagEdit('none');
                    }}
                    className="btn-back">
                    <img src='src/img/back.svg' className="img-back"/>
                </Button>
                <h1 className="h1-profile">
                    ПРОФИЛЬ</h1>
            </div>
            <div className="contentProfile">
                <div className="div-img">
                    <img
                        className="img"
                        src="https://avatars.mds.yandex.net/get-pdb/1532005/3b2ab7ca-bfcd-4365-a079-cd979c5d9a5a/s1200?webp=false"
                        alt="Avatar"/>
                </div>
                <div className="dataProfile">
                    <div className="containerEdit">
                        <form className="formProfile" autoComplete="off">
                            <TextField
                                inputRef = {textInput}
                                id="standard-basic"
                                label="Ваше имя"
                                name="name"
                                value={nameSave}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                                classes={{
                                    root: classesTextField.root
                                }}
                                />

                            <Button
                                className="btn-edit"
                                data-title="Edit"
                                onClick={() => {
                                    textInput.current.focus(); 
                                    setClassEdit('')
                                    setFlagEdit('solid');
                                    setFlagShowBtnEdit('none')
                                    setFlagShowBtnSave('');
                                }}
                                classes={{
                                    root: classes.root
                                }}>
                                    <img src="src/img/edit.svg" alt="edit" className="img-edit"/>
                                </Button>
                            <Button
                                className="btn-save"
                                data-title="Save"
                                classes={{
                                    root: classes.rootBtnSave
                                }}
                                onClick={() => {
                                    setClassEdit('readonly')
                                    setFlagEdit('none');
                                    setFlagShowBtnEdit('')
                                    setFlagShowBtnSave('none');
                                    onSaveChangesProfileData(
                                        nameSave
                                    );
                                }}>
                                 <img src="src/img/save.svg" alt="save" className="img-save-pr"/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (store, props) => {
    const nameProfile = store.chats.profileData;
    const name= (nameProfile!=undefined) ? nameProfile.name : ''
    return {name}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveChangesProfileData
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    const onSaveChangesProfileData = (nameSave) => {
        console.log(nameSave)
        dispatchProps.saveChangesProfileData(nameSave);
    }


   
    return {name: stateProps.name,
         classOpenProfile: ownProps.classOpenProfile,
          exitProfile: ownProps.onSetClassOpenProfile,
           onSaveChangesProfileData}
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Profile);
