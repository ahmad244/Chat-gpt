import React from "react";
import "./ChatSecion.css";
import { IconButton } from "@mui/material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import ChatList from "./ChatList";

class ChatSecion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    this.showSideBar = this.showSideBar.bind(this);

    this.closeSideBar = this.closeSideBar.bind(this);
  }
  showSideBar() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
    document.getElementsByClassName("SideBar")[0].style.width = "250px";
    document.getElementsByClassName("MainContainer")[0].style.marginLeft =
      "310px";
    document.getElementsByClassName("SideBar")[0].style.padding = "30px";
  }
  closeSideBar() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
    document.getElementsByClassName("SideBar")[0].style.width = "0";
    document.getElementsByClassName("MainContainer")[0].style.marginLeft = "0";
    document.getElementsByClassName("SideBar")[0].style.padding = "0px";
  }
  render() {
    const chatItems = this.props.chatItems;

    return (
      <div className="ChatSecion">
        <IconButton
          aria-label="show sidebar"
          style={{
            margin: "15px",
            transform: "scale(1.8)",
          }}
          onClick={this.state.isNavOpen ? this.closeSideBar : this.showSideBar}
        >
          <ViewHeadlineIcon />
        </IconButton>
        <ChatList chatItems={chatItems} />
      </div>
    );
  }
}

export default ChatSecion;
