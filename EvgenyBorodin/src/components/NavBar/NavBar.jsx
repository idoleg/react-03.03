import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { NavBarItem } from '../NavBarItem/NavBarItem.jsx'

import './NavBar.css'

const NavBar = ({selectedPath}) => {
    return (<nav>
        <NavBarItem selectedPath={selectedPath} itemPath="/" itemText="Main" />
        <NavBarItem selectedPath={selectedPath} itemPath="/chats" itemText="Messenger" />
        <NavBarItem selectedPath={selectedPath} itemPath="/profile" itemText="Profile" />
        <NavBarItem selectedPath={selectedPath} itemPath="/about" itemText="About..." />

    </nav>)
    // return (<nav>
    //     { selectedPath === '/' ? <span className="selectedPath">Main</span> : <Link to="/">Main</Link> }
    //     { selectedPath === '/chats' ? <span className="selectedPath">Messenger</span> : <Link to="/chats">Messenger</Link> }
    //     { selectedPath === '/profile' ? <span className="selectedPath">Profile</span> : <Link to="/profile">Profile</Link> }
    //     { selectedPath === '/about' ? <span className="selectedPath">About...</span> : <Link to="/about">About...</Link> }
    // </nav>)
}

NavBar.propTypes = {
    selectedPath: PropTypes.string.isRequired
}

const mapStateToProps = (store) => {
    const selectedPath = store.router.location.pathname
    return {
        selectedPath,
    }
}

export default connect(mapStateToProps)(NavBar)

