import React from 'react';
import {ChatForm} from './ChatForm';
import {shallow} from 'enzyme';
import Button from '@material-ui/core/Button';

describe("ChatForm.jsx", () => {
    it("render content", () => {
        const name = "Ivan";
        const content = "Hello";
        const props = {
            onSendMessage: jest.fn(),
        }
        const element = shallow(<ChatForm {...props}/>)

        element.find({ label: "Имя"}).at(0).simulate('change', {currentTarget: {value: name}});
        element.find({ label: "Сообщение"}).at(0).simulate('change', {currentTarget: {value: content}});
        element.find(Button).simulate('click');

        expect(props.onSendMessage).toHaveBeenCalledWith({name, content});
    });

});