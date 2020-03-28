import React from 'react';
import { Link } from 'react-router-dom'

export class Profile extends React.Component {
    state = {
        userName: 'User'
    }

    render() {
        const { userName } = this.state;

        return (
            <>
                <header>Ваш профиль</header>
                <ul className='main'>
                    <li>Ваше имя: {userName}</li>
                </ul>
                <button><Link to='/chats/'>Перейти в чаты</Link></button>
            </>
        )
    }

}