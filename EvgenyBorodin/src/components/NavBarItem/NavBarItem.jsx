import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavBarItem = ({selectedPath, itemPath, itemText}) => {
    let className = ""
    if ((selectedPath === itemPath) || (itemPath !== '/' && selectedPath.includes(itemPath))) {
        className = "selectedPath"
    } 
    return <Link to={itemPath} className={className}>{itemText}</Link>
}

NavBarItem.propTypes = {
    selectedPath: PropTypes.string.isRequired,
    itemPath: PropTypes.string.isRequired,
    itemText: PropTypes.string.isRequired,
}
