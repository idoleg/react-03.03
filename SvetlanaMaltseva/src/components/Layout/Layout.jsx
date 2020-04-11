import React from 'react';
import Header from '../Header/Header';
import ChatList from '../containers/ChatList';
import MessageField from '../containers/MessageField';
import './Layout.css';

function Layout() {
  return (
    <div className='container-fluid'>
      <Header />
      <div className='row'>
        <div className='col-3'>
          <ChatList />
        </div>
        <div className='col-9'>
          <MessageField />
        </div>
      </div>
    </div>
  );
}

export default Layout;
