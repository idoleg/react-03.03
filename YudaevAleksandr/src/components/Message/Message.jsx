import React from 'react';
import Row from "react-bootstrap/Row";

export const Message = ({name, content, i}) => {
    return (
        <Row className={name === 'Me'? 'd-flex justify-content-end':''} >
            <strong>{name}</strong>: {content}
        </Row>
    )
};