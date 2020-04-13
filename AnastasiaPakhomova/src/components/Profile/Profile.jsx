import React, {useState} from "react"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import {initProfile} from '../../store/chatActions.js'


class Profile extends React.Component {
	render () {
		const { name, surname, age,  isLoading, error } = this.props.user
		if(isLoading) {
        	return <div>Профиль загружается</div>
    	}
    	if(error) {
        	return null
    	}

	  return (
		  <div>
			  <h3>Profile Page</h3>
			  <div>Name: {name}</div>
			  <div>Surname: {surname}</div>
			  <div>Age: {age}</div>
		  </div>
	  )
	}
}

const mapStateToProps = (store, props) => {
   return {
	   isLoading: store.user.isLoading,
       error: store.user.error,
       user: store.user.user
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({ initProfile }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
