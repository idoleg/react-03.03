import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './ChatListItem.css';

export const ChatListItem = ({item, index, fire, selected}) => {
    let classList = "link " + (fire ? "fire " : "") + (selected ? "selected" : "")
    return (
        <Link to={`/chats/${index}`} className={classList}>{item}</Link>

        // <span>
        //     <input type="radio" name="chatlistitem" id={"chatlistitem" + index} checked={index == selectedId} onChange={}/>
        //     <label htmlFor={"chatlistitem" + index}><Link to="/chats/{index}">{item.name}</Link></label>
        // </span>
    )
}

ChatListItem.propTypes = {
    item: PropTypes.string.isRequired,
    index: PropTypes.string.isRequired,
    fire: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
}