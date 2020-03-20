import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
export default class Message extends React.Component {
  render() {
    const { author, text } = this.props;

    return (
      <li className="li-message">
        <strong>{author}</strong>: {text}
      </li>
    );
  }
}
