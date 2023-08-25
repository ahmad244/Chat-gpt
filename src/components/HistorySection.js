import React from "react";
import "./HistorySection.css";

class HistorySection extends React.Component {
    
  render() {
    return <div className="HistorySection">
         {this.props.children}
        </div>;
  }
}

export default HistorySection;
