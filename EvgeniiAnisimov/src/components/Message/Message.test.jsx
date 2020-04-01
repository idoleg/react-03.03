import React from 'react';
import { Message } from './Message';
import TestRenderer from 'react-test-renderer';

describe('Message.jsx', () => {
  it('render content', () => {
    const props = {
      name: "Ivan",
      content: "Hello!"
    };

    const element = TestRenderer.create(<Message {...props} />);

    expect(element.toJSON()).toMatchSnapshot();
  });
})
