import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';
import {ChatNameDialog} from "Components/ChatNameDialog/ChatNameDialog";
import {PushToogle} from "Components/PushToogle";

export const ChatListHeader = ({className='', handleAddNewChat}) => {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const onOpenAddChat = () => {
        setShowAddDialog(true);
    };
    const onCloseAddChat = () => {
        setShowAddDialog(false);
    };

    return (
        <>
            <AppBar className={className}>
                <Toolbar>
                    <PushToogle />
                    <Typography variant="h6" noWrap style={{flexGrow: 1}}>
                        Чаты
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="Add Chat" onClick={onOpenAddChat}>
                        <AddIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <ChatNameDialog
                open={showAddDialog}
                handleCreateRenameChat={handleAddNewChat}
                handleClose={onCloseAddChat}
            />
        </>
    )
};