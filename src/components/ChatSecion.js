import React from "react";
import "./ChatSecion.css";
import ChatItem from "./ChatItem";

class ChatSecion extends React.Component {
  render() {
    return (
      <div className="ChatSecion">

        <ChatItem name="Assistant" model="gpt-3.5-turbp" />
        <ChatItem name="Ahmad" />
      
      </div>
    );
  }
}

export default ChatSecion;
