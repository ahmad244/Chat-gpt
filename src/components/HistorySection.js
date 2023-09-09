import React, {PureComponent} from 'react'
import "./HistorySection.css";

class HistorySection extends PureComponent {
    
  render() {
    return <div className="HistorySection">
         {this.props.children}
        </div>;
  }
}

export default HistorySection;
