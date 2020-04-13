import React from 'react';
import {ChatForm} from './ChatForm';
import {shallow} from 'enzyme';
import Fab from '@material-ui/core/Fab'

describe("ChatForm.jsx", () => {
    it("render content", () => {
        const name = "Ivan";
        const text = "Hello";
        const props = {
            onSendMessage: jest.fn(),
        }
        const element = shallow(<ChatForm {...props}/>)

        element.find({ label: "Name"}).at(0).simulate('change', {currentTarget: {value: name}});
        element.find({ label: "Type your message"}).at(0).simulate('change', {currentTarget: {value: text}});
        element.find(Fab).simulate('click');

        expect(props.onSendMessage).toHaveBeenCalledWith({name, text});
    });

});
