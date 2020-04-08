import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export const ChatNameDialog = ({open, title='Add New Chat', chatName ='', handleCreateRenameChat, handleClose }) => {
    const [value, setValue] = useState(chatName);
    const [addEnable, setAddEnable] = useState(false)
    const onChange = (e) => {
        setValue(e.target.value);
        setAddEnable(e.target.value.length ? true : false);
    };
    const onClose = () => {
        handleClose();
        setValue('');
        setAddEnable(false);
    };
    const onAdd = ()=> {
        if (addEnable){
            handleCreateRenameChat(value);
            onClose();
        }
    };

    const onKeyUp = (e) => {
        if (e.keyCode === 13) onAdd();
    };

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Chat name"
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={onAdd} color="primary" disabled={!addEnable}>
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    )
}