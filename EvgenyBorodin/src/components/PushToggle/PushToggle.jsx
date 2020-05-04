import React from 'react';

import './PushToggle.css';

export default class PushToggle extends React.Component {
    render () {
        return (
            <div className="push">
                <img className="push__image" src="/images/push_off.png" alt="Push Notification"/>
            </div>
        )
    }
}