import React from "react";
import ReactDom from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ChatList } from './components/ChatList/ChatList';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

export default class App extends React.Component {
    state = {
        messages: [
            {name: "Alex", content: "Hello!"},
            {name: "Me", content: "Hi, how are you?"},
            {name: "Alex", content: "I am well! And you?"},
            {name: "Me", content: "Me too"},
        ],
        input: ''
    };

    handleChange = (event) => {
        this.setState({input: event.target.value });
    };

    sendMessage = (message) => {
        if (this.state.input !== '') {
            this.setState({
                messages: [...this.state.messages, {name: 'Me', content: message}],
                input: ''
            });
        }
    };

    render() {
        let messageList = this.state.messages.map((data, i) => {
            return (
                <Row className={data.name === 'Me'? 'd-flex justify-content-end':''} key={i}>
                    <strong>{data.name}</strong>: {data.content}
                </Row>
            )
        });

        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <ChatList />
                    </Col>
                    <Col sm={8}>
                        {messageList}
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Input your message"
                                aria-label="Input your message"
                                value={ this.state.input }
                                onChange = { this.handleChange }
                            />
                            <InputGroup.Append>
                                <Button onClick={() => this.sendMessage(this.state.input)} variant="outline-primary">Send message</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}