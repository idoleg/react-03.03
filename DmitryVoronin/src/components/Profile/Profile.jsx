import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {
    return (
        <div className="card large">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="../../static/images/profile.jpg"/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
            </div>
        </div>
    );
}