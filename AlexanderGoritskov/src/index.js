import React from "react"
import ReactDOM from "react-dom"

const messages = [
  {name:"Ivan" , content:"Hello world"},
  {name:"Petr" , content:"How r u?"},
  {name:"Ivan" , content:"I'm fine"},
]

const Message = ({name, content}) => {
return <li><strong>{name}:</strong> {content}</li>
}

const MessageList = ({messages}) => {
  return <ul>
    {messages.map((item, index) => <Message  {...item} key={index}/>)}
  </ul>
}
//const element = React.createElement("a", {href: "http://ps.vsw.ru"}, "PS")
//const Link = () => React.createElement("a", {href: "http://ps.vsw.ru"}, "PS")

//function Link(props) {
//  return React.createElement("a", {href: "http://" + props.to}, props.to)
//}

//function Link (props) {
//  return <a href={"https://" + props.to}>{props.to.toLocaleUpperCase()}</a>
//}

function PostMessage() {
  messages.push({name: "Alex", content: "Its Ok"});
  return messages;
}
const Button = () => {
  return <button onClick={()=>PostMessage()}>Send</button>
}

ReactDOM.render(<MessageList messages={messages}/>, document.getElementById("root"))
ReactDOM.render(<Button/> , document.getElementById("btn"))