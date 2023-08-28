import React from "react";
import "./ChatList.css";

class ChatList extends React.Component {
    
  render() {
    return <div className="ChatList">
         {this.props.children}
        </div>;
  }
}

export default ChatList;
