import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";

export const Message = ({name, content, i}) => {
    const useStyles = makeStyles(theme => ({
        message: {
            display: `flex`,
            justifyContent: () => name === 'Me' ? 'flex-end' : 'flex-start',
            fontSize: '16px',
            marginBottom: '10px',
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.message} key={i}>
            <strong>{name}</strong>: {content}
        </div>
    )
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};