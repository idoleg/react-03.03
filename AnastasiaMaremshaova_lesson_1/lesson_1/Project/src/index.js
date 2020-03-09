import React from "react";
import ReactDOM from "react-dom";

const btn_answer = "Нормально!"; 

const messages = [
    {name: "Ivan", content: "Hello, world!"},
    {name: "Igor", content: "Hello, how are you?"},
    {name: "Ivan", content: "I'm well!"}
]

const Message = ({name, content}) => {
return <li><strong>{name}: </strong>{content}</li>
    }

const MessageList = ({messages}) => {
    return  (<ul>
        {messages.map((item, index) => <Message {...item} key={index}/>)}</ul>);
}


//const element = React.createElement("a", {href:"https://ya.ru"}, "Yandex.ru");

//const Link = () => React.createElement("a", {href:"https://ya.ru"}, "Yandex.ru");

// function Link(props){
//     return React.createElement("a", {href:"https://" + props.to}, props.to.toLocaleUpperCase());
// }

// function Link(props){
//     return <a href={"https://" + props.to}>{props.to.toLocaleUpperCase()}</a>
// }

const BtnAnswer = () => {
    function onClick(e) {
      e.preventDefault();
      messages.push({name: "Ivan", content: btn_answer});
      console.log(messages); 
      return ReactDOM.render(<MessageArea />, document.getElementById('root'))
    }

    return (
      <button onClick={onClick}>{btn_answer}</button>
    );
  }

  const MessageArea = () => {
    return (<div id="container"><MessageList messages={messages}/><BtnAnswer/></div>)
 }

ReactDOM.render(<MessageArea />, document.getElementById('root'))