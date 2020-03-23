import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export const Profile = () => {
    return (
        <>
        <CssBaseline />
        <Container maxWidth="lg">
            <Typography component="div" style={{ backgroundColor: 'lightgreen', minHeight: '70vh' }} />
        </Container>
        </>
    )
}
