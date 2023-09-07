import React from "react";
import "./ChatList.css";
import ChatItem from "./ChatItem";

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    // Create a ref for the ChatList element
    this.chatListRef = React.createRef();
  }

  // Function to scroll to the bottom of the chat list
  scrollToBottom = () => {
    if (this.chatListRef.current) {
      this.chatListRef.current.scrollTop = this.chatListRef.current.scrollHeight;
    }
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { chatItems } = this.props;

    return (
      <div className="ChatList" ref={this.chatListRef}>
        {chatItems.map((item, index) => (
          <ChatItem key={index} obj={item} />
        ))}
        {/* Create a placeholder element for scrolling to the bottom */}
        <div ref={(el) => (this.messagesEnd = el)}></div>
      </div>
    );
  }
}

export default ChatList;
