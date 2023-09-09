import React, {PureComponent} from 'react'
import "./HistoryItem.css";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

class HistoryItem extends PureComponent {
  render() {
    return (
      <div className="HistoryItem">
        <ViewHeadlineIcon />
        {this.props.name}
      </div>
    );
  }
}

HistoryItem.defaultProps = {
  name: "default props name",
};

export default HistoryItem;
