import React from 'react';
import TestRenderer from 'react-test-renderer';
import {Message} from './Message';

describe("Message.jsx", () => {
    it("render content", () => {
        const props = {
            name: "Ivan",
            content: "Hello!",
        };

        const element = TestRenderer.create(<Message  {...props}/>)

        expect(element.toJSON()).toMatchSnapshot();
    });
})
