import React, { Component } from "react";
import "./App.css";
import ChatSecion from "./components/ChatSecion";
import ChatUserInputSec from "./components/ChatUserInputSec";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatItems: [
        {
          name: "System",
          content: "you're a good assisstant, now do your magic!",
          role: "system",
        },
        {
          name: "Assistant",
          content:
            "Thank you for your kind words! I'm here to help you with whatever you need. Just let me know what you'd like assistance with or what information you're looking for, and I'll do my best to assist you.",
          role: "assistant",
        },
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
    return (
      <div>
        <MainContainer>
          <SideBar />
          <ChatSecion chatItems={this.state.chatItems} />
          <ChatUserInputSec
            chatItems={this.state.chatItems}
            addChatItem={this.addChatItem}
          />
        </MainContainer>

        {/* <button>Ahmad</button>
      <button>Send</button>
      <button>Send</button>
      <button>Send</button> */
        /* <MainContainer className="MainContainer">
        <ChatSecion>
          <ChatList>
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </ChatList>
          <ChatUserInputSec>
            <input>ChatTextParagraphField </input>
            <input type="radio">ChooseGptVersionRadio</input>
            <button>Send</button>
          </ChatUserInputSec>
        </ChatSecion>
        <SideBar>
          <button>StartNewchatBtn</button>
          <HistorySection>
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
          </HistorySection>
        </SideBar>
      </MainContainer> */}
      </div>
    );
  }
}

export default App;
