import React from "react";
import "./ChatSecion.css";
import ChatItem from "./ChatItem";

class ChatSecion extends React.Component {
 

  render() {
    const chatItems = this.props.chatItems;

    return (
      <div className="ChatSecion">
        {chatItems.map((item, index) => (
          <ChatItem
            key={index}
            obj={item}
          />
        ))}
      </div>
    );
  }
}

export default ChatSecion;
