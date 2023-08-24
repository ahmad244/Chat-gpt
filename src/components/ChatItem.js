import React from "react";
import "./ChatItem.css";

class ChatItem extends React.Component {
  render() {
    return (
      <>
        <div
          className="ChatItem"
          style={
            (this.props.name != "Assistant") & (this.props.name != "System")
              ? { flexDirection: "row-reverse" }
              : null
          }
        >
          <div
            style={{
              borderRadius: "100%",
              backgroundColor: "brown",
              width: "40px",
              height: "40px",
            }}
          />

          <div>
            <div style={{ fontWeight: "bold" }}>{this.props.name}</div>
            <div style={{ fontSize: "8pt" }}>{this.props.model}</div>
            <div style={{ fontSize: "8pt" }}>{this.props.datetime}</div>
          </div>

          <div
            style={
              (this.props.name != "Assistant") & (this.props.name != "System")
                ? { alignSelf: "flex-start", marginTop: "35px" }
                : { marginTop: "35px" }
            }
          >
            this is the comment
          </div>
        </div>
      </>
    );
  }
}

export default ChatItem;
