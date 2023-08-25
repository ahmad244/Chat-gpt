import * as React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import "./ChatUserInputSec.css";

class ChatUserInputSec extends React.Component {
  render() {
    return (
      <div className="ChatUserInputSec">
        <TextField
          style={{ flexGrow: 5 }}
          id="outlined-multiline-flexible"
          label="write to AI"
          multiline
          rows={4}
        />

        <Button color="salmon" variant="contained">
          Send
        </Button>
      </div>
    );
  }
}

export default ChatUserInputSec;
