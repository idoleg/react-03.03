import React from "react";
import ReactDom from "react-dom";
import Nav from 'react-bootstrap/Nav';

export const ChatList = () => {
    return (
        <Nav variant="pills" className="flex-column">
            <Nav.Item>
                <Nav.Link active eventKey="first">RobotAlex</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled eventKey="second">Helen</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link disabled eventKey="third">Max</Nav.Link>
            </Nav.Item>
        </Nav>
    )
};