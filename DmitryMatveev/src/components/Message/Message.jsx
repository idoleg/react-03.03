import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import Grid from '@material-ui/core/Grid';

import './Message.css';

export const Message = ({name, text}) => {
    const className = classname("Message", {'Message--robot': name === 'RoboFriend'});
    return <Grid  container className={className} >
                <strong>{name}:</strong> {text}
            </Grid>
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}