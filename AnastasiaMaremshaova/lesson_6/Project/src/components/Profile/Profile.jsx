import React from "react";
import {connect} from 'react-redux';
import './Profile.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {bindActionCreators} from 'redux'
import {saveChangesProfileData} from '../../store/chatActions'
import {SVGEdit} from '../FormCreateChat/useStyles';
import {useState} from "react";
import {useStyles, useStylesTextField, useStylesBtnBack} from './useStyles'

export const Profile = ({name, classOpenProfile, exitProfile, onSaveChangesProfileData}) => {

    const [flagShowBtnEdit, setFlagShowBtnEdit] = useState('');
    const [flagShowBtnSave, setFlagShowBtnSave] = useState('none');
    const [classEdit, setClassEdit] = useState('readonly');
    const [nameNew, setName] = useState(name);
    const [flagEdit, setFlagEdit] = useState('none');

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
                                id="standard-basic"
                                label="Ваше имя"
                                name="name"
                                value={nameNew}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                                classes={{
                                    root: classesTextField.root
                                }}
                                inputProps={{
                                    readOnly: classEdit
                                }}/>

                            <Button
                                className="btn-edit"
                                data-title="Edit"
                                onClick={() => {
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
                                    onSaveChangesProfileData();
                                }}>
                                 <img src="src/img/save.svg" alt="save" className="img-save"/>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (store, props) => {
    const name = store.chats.state.profileData.name;
    console.log(props);
    return {name}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveChangesProfileData
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    let nameSave = stateProps.name;

    const onSaveChangesProfileData = () => {
        dispatchProps.saveChangesProfileData(nameSave);
    }

    return {name: stateProps.name, classOpenProfile: ownProps.classOpenProfile, exitProfile: ownProps.onSetClassOpenProfile, onSaveChangesProfileData}
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(
    Profile
);
