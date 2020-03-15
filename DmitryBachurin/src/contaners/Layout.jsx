import React from "react";
import { Header } from '~/components/Header/Header';
import { ChatList } from '~/components/ChatList/ChatList';
import { MessageField } from '~/contaners/MessageField/MessageField';
import './Layout.scss';

export class Layout extends React.Component {
    state = {
        title: 'Чат на React',
        contacts: [
            { name: 'Иван' },
            { name: 'Олег' },
            { name: 'Дмитрий' },
            { name: 'Михаил' },
            { name: 'Анастасия'},
            { name: 'Олег' },
            { name: 'Дмитрий' },
            { name: 'Михаил' },
        ]
    }

    render() {
        const { contacts, title } = this.state;

        return (
            <>
                <Header title={title} />
                <div className="main">
                    <ChatList contacts={contacts} />
                    <MessageField />
                </div>

            </>
        )
    }
}