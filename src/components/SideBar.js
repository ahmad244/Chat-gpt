import React from "react";
import "./SideBar.css";
import { Button } from "@mui/material";
import HistorySection from "./HistorySection";
import HistoryItem from "./HistoryItem";

class SideBar extends React.Component {
  render() {
    return (
      <div className="SideBar">
        <Button
          style={{ margin: "20px", backgroundColor: "#2f3e46" }}
          variant="contained"
        >
          Start New Chat
        </Button>

        <HistorySection>
          <HistoryItem />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
          <HistoryItem name="texting solutions" />
        </HistorySection>
      </div>
    );
  }
}

export default SideBar;
