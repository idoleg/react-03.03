import React from "react"
import {Link} from 'react-router-dom'
import './Header.css'
import Profile from '../Profile/Profile'
import {connect} from 'react-redux'

export class Header extends React.Component {
	render () {
	const { name } = this.props.user
		return (
			<header>
				<nav>
					<div className="nav-item"><Link to="/profile/">Profile</Link></div>
					<div className="nav-item"><Link to="/chats/">Chats</Link></div>
				</nav>
				<h1>Messenger</h1>
				<div className="profile-name"><Link to="/profile/">{name}</Link></div>
			</header>
		)
	}
}

const mapStateToProps = (store, props) => {
   return {
     user: store.user.user
   }
}

export default connect(mapStateToProps)(Header)

