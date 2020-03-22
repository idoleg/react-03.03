import React, {Component} from "react";


export class Login extends Component {

   state = {
      inputUsername: "",
   };

   submitForm = (event) => {
      event.preventDefault();
      const username = this.state.inputUsername.trim();
      if (username)
         this.props.updateUsername(username);
      this.setState((state) => ({inputUsername: ""}))
   };

   handleChange = (event) => {
      const value = event.target.value;
      this.setState((state) => ({inputUsername: value}));
   };

   render() {
      return (
         <div>
            <b>Bot knows you as {this.props.username}</b>
            <form onSubmit={this.submitForm}>
               <input type="text"
                      placeholder="Introduce yourself"
                      value={this.state.inputUsername}
                      onChange={this.handleChange}/>
               <input type="submit" value="Done!"/>
            </form>
         </div>
      )
   };
}
