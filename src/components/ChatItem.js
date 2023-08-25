import React from "react";
import "./ChatItem.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MonitorIcon from "@mui/icons-material/Monitor";
import Person2Icon from "@mui/icons-material/Person2";

class ChatItem extends React.Component {
  chooseIcon(param) {
    const style = {
      borderRadius: "100%",
      backgroundColor: "transparent",
      borderColor: "peachpuff",
      width: "40px", 
      borderWidth: "thick",
      borderStyle: "solid",
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
    switch (param) {
      case "Assistant":
        style["borderColor"] = "green";
        return (
          <div style={style}>
            <SmartToyIcon />
          </div>
        );

      case "System":
        style["borderColor"] = "blue";
        return (
          <div style={style}>
            <MonitorIcon />
          </div>
        );

      default:
        return (
          <div style={style}>
            <Person2Icon />
          </div>
        );
    }
  }
  render() {
    return (
      <>
        <div
          className="ChatItem"
          style={
            (this.props.name !== "Assistant") & (this.props.name !== "System")
              ? { flexDirection: "row-reverse" }
              : null
          }
        >
          {this.chooseIcon(this.props.name)}

          <div>
            <div style={{ fontWeight: "bold" }}>{this.props.name}</div>
            <div style={{ fontSize: "8pt" }}>{this.props.model}</div>
            <div style={{ fontSize: "8pt" }}>{this.props.datetime}</div>
          </div>

          <div
            style={
              (this.props.name !== "Assistant") & (this.props.name !== "System")
                ? { alignSelf: "flex-start", marginTop: "35px" }
                : { marginTop: "35px" }
            }
          >
            {this.props.comment}
          </div>
        </div>
      </>
    );
  }
}

export default ChatItem;
