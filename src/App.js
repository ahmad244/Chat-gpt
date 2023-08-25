import React from "react";
import "./App.css";
import ChatSecion from "./components/ChatSecion";
import ChatUserInputSec from "./components/ChatUserInputSec";
import MainContainer from "./components/MainContainer";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div>
      <MainContainer>
        <ChatSecion />
        <SideBar/>
        <ChatUserInputSec />
      </MainContainer>

      {/* <button>Ahmad</button>
      <button>Send</button>
      <button>Send</button>
      <button>Send</button> */}
      {/* <MainContainer className="MainContainer">
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

export default App;
