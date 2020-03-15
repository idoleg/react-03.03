import React from 'react';
import { Contact } from './Contact/Contact';

import './ChatList.scss'


const ChatList = ({ contacts }) => {
    return (
        <ul className='chatList'>
            {contacts.map((item, index) => <Contact {...item} key={index} />)}

        </ul>
    )
};

export { ChatList };
