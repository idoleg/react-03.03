import React, {Component} from "react";


export class Input extends Component {

   state = {
      message: "",
   };

   submitForm = (event) => {
      event.preventDefault();
      const message = this.state.message.trim();
      if (message)
         this.props.addMessage(message);
      this.setState((state) => ({message: ""}));
   };

   handleChange = (event) => {
      const value = event.target.value;
      this.setState((state) => ({message: value}));
   };

   render() {
      return (
         <form onSubmit={this.submitForm}>
            <input type="text"
                   placeholder="Type something to bot here"
                   value={this.state.message}
                   onChange={this.handleChange}/>
            <input type="submit" value="Send"/>
         </form>
      )
   }
}
