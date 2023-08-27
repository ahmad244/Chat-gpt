import React from "react";
import "./ChatSecion.css";
import ChatItem from "./ChatItem";

class ChatSecion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatItems: [
        // Initial chat items
        {
          name: "Assistant",
          model: "gpt-3.5-turbp",
          comment: "this is a comment",
        },
        { name: "Ahmad", comment: "this is a reply" },
        { name: "System", comment: "Meh" },
        // ... other initial chat items ...
      ],
    };
  }

  // Function to add a new chat item
  addChatItem = (newChatItem) => {
    this.setState((prevState) => ({
      chatItems: [...prevState.chatItems, newChatItem],
    }));
  };

  render() {
    const { chatItems } = this.state;

    return (
      <div className="ChatSecion">
        {chatItems.map((item, index) => (
          <ChatItem
            key={index}
            name={item.name}
            model={item.model}
            comment={item.comment}
          />
        ))}
      </div>
    );
  }
}

export default ChatSecion;
