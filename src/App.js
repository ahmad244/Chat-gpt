import logo from "./logo.svg";
import "./App.css";
import MainContainer from "./components/MainContainer";
import ChatSecion from "./components/ChatSecion";
import ChatList from "./components/ChatList";
import ChatItem from "./components/ChatItem";
import SideBar from "./components/SideBar";
import HistorySection from "./components/HistorySection";
import HistoryItem from "./components/HistoryItem";
import ChatUserInputSec from "./components/ChatUserInputSec";

function App() {
  return (
    <MainContainer>
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
    </MainContainer>
  );
}

export default App;
