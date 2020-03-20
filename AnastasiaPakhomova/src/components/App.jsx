import React from "react"
import {MessageList} from './MessageList/MessageList'

export class App extends React.Component {

  render() {
    return (
		<>
        <h3>Messenger</h3>
        <MessageList />
		</>
    )
  }
}

