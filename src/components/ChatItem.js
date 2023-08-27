import React from "react";
import "./ChatItem.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import MonitorIcon from "@mui/icons-material/Monitor";
import Person2Icon from "@mui/icons-material/Person2";

class ChatItem extends React.Component {
  chooseStyle(param) {
    const style = {
      flexDirection: "row-reverse",
    };
    switch (param) {
      case "assistant":
        delete style.flexDirection;
        style["backgroundColor"] = "#5f9b8c"
        return style;

      case "system":
        delete style.flexDirection;
        return style;

      default:
        style["backgroundColor"] = "#428776"        
        return style;
    }
  }

  chooseIcon(param) {
    const style = {
      borderRadius: "100%",
      backgroundColor: "transparent",
      borderColor: "#2f3e46",
      width: "40px",
      height: "40px",
      borderWidth: "thick",
      borderStyle: "solid",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink:0
    };
    switch (param) {
      case "assistant":
        style["borderColor"] = "green";
        return (
          <div style={style}>
            <SmartToyIcon />
          </div>
        );

      case "system":
        style["borderColor"] = "#354f52";
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
        <div className="ChatItem" style={this.chooseStyle(this.props.obj.role)}>
          {this.chooseIcon(this.props.obj.role)}

          <div>
            <div style={{ fontWeight: "bold" }}>{this.props.obj.name}</div>
            <div style={{ fontSize: "8pt" }}>{this.props.obj.model}</div>
            <div style={{ fontSize: "8pt" }}>{this.props.obj.datetime}</div>
          </div>

          <div
            style={
              (this.props.obj.role !== "assistant") &
              (this.props.obj.role !== "system")
                ? { alignSelf: "flex-start", marginTop: "35px" }
                : { marginTop: "35px" }
            }
          >
            {this.props.obj.content}
          </div>
        </div>
      </>
    );
  }
}

export default ChatItem;
