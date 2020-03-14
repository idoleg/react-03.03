import React from 'react';

export const Message = ({ name, content }) => (
  <li><strong>{name}</strong>: {content}</li>
);

export default Message;