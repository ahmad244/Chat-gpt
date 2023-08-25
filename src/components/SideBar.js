import React from "react";
import "./SideBar.css";
import { Button } from "@mui/material";
import HistorySection from "./HistorySection";
import HistoryItem from "./HistoryItem";


class SideBar extends React.Component {
    
  render() {
    return <div className="SideBar">
         <Button color="salmon" variant="outlined">Start New Chat</Button>
       
          <HistorySection>
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
          </HistorySection>
        
        </div>;
  }
}

export default SideBar;
