import React, {Component} from "react"
import {MessagingContainer} from "./components/MessagingContainer";
import {Login} from "./components/Login";


export default class App extends Component {

   state = {
      username: "Guest"
   };

   setUsername = (username) => {
      this.setState((state) => ({username: username}))
   };

   render() {
      return (
         <>
            <Login username={this.state.username} updateUsername={this.setUsername}/>
            <MessagingContainer username={this.state.username}/>
         </>
      );
   }
}
