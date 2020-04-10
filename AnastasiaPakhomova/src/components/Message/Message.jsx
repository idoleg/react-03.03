import React from "react"
import PropTypes from "prop-types"
import classname from "classname"
import './Message.css'

export const Message = ({name, text}) => {
	const className = classname("message", {'message--robot': name === 'Bot'})
    return <li className={className}><span className="user-name">{name}:</span> {text}</li>
}

Message.propTypes = {
	name: PropTypes.string.isRequired,
	//text: PropTypes.string.isRequired
}
