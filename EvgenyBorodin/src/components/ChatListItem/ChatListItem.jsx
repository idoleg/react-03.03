import React from "react";
import {Link} from 'react-router-dom';

import './ChatListItem.css';

export const ChatListItem = ({item, index, selectedId}) => {
    const classList = index == selectedId ? "link selected" : "link"
    return (
        <Link to={`/chats/${index}`} className={classList}>{item.name}</Link>

        // <span>
        //     <input type="radio" name="chatlistitem" id={"chatlistitem" + index} checked={index == selectedId} onChange={}/>
        //     <label htmlFor={"chatlistitem" + index}><Link to="/chats/{index}">{item.name}</Link></label>
        // </span>
    )
}