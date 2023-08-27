import React from "react";
import "./HistoryItem.css";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';


class HistoryItem extends React.Component {
    
  render() {
    return <div className="HistoryItem">
        
        <ViewHeadlineIcon />
        {this.props.name}

        </div>;
  }
}

export default HistoryItem;