import React, {Component} from "react";
import ReactDom from "react-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ChatList } from './components/ChatList/ChatList';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { MessageField } from "./components/MessageField/MessageField";

export default class App extends Component {
    state = {
        messages: [
            {name: "RobotAlex", content: "Hello!"},
            {name: "Me", content: "Hi, how are you?"},
            {name: "RobotAlex", content: "I am well! And you?"},
            {name: "Me", content: "Me too"},
        ],
        input: '',
        textFieldDisabled:false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.messages[this.state.messages.length - 1].name !== "RobotAlex" &&
            prevState.messages.length !== this.state.messages.length){
            setTimeout(() => {
                let message = {name: "RobotAlex", content: "Stupid robot message"};
                this.setState(() => ({
                    messages: [...this.state.messages, message],
                    textFieldDisabled: false
                }));
            }, 2000);
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value });
    };

    sendMessage = (message) => {
        if (this.state.input !== '') {
            this.setState({
                messages: [...this.state.messages, {name: 'Me', content: message}],
                input: '',
                textFieldDisabled: true
            });
        }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        <ChatList />
                    </Col>
                    <Col sm={8}>
                        <MessageField messages={this.state.messages} />
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Input your message"
                                aria-label="Input your message"
                                value={ this.state.input }
                                onChange = { this.handleChange }
                                disabled={this.state.textFieldDisabled}
                            />
                            <InputGroup.Append>
                                <Button
                                    onClick={() => this.sendMessage(this.state.input)}
                                    variant="outline-primary"
                                    disabled={this.state.textFieldDisabled}
                                >Send message</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}