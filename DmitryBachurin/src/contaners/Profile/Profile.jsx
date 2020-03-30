import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Profile = ({ userName }) => {

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
const mapStateToProps = (store, props) => {
    const userName = store.chat.userName;
    return {
        userName
    }
}


export default connect(mapStateToProps)(Profile);