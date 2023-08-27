import * as React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";
import "./ChatUserInputSec.css";

class ChatUserInputSec extends React.Component {
  handleClick = () => {
    // Set the headers for the API key
    const config = {
      headers: {
        "Appian-API-Key":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NTY0NTU4Mi1kYzJlLTRkNmYtYWQ3YS02NGJiNTc1ZTBkYWQifQ.qvBFLvd3S9LQivUGaKo1agqb1X5ZTBHPyVFI8VqBgmU", // Replace "your-api-key" with your actual API key
      },
    };

    // Make API call using axios with the headers
    axios
      .post(
        "https://hjpt.appian.community/suite/webapi/call-gpt",
        { dummyQueryParam: 123 },
        config
      )
      .then((response) => {
        // Handle the response from the API
        const alteredResponse = response.data.choices[0].message;
        alteredResponse["name"] = "React user name";
        console.log(alteredResponse);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
      });
  };

  render() {
    return (
      <div className="ChatUserInputSec">
        <TextField
          style={{ flexGrow: 5 }}
          id="outlined-multiline-flexible"
          label="write to AI"
          multiline
          InputProps={{ sx: { borderRadius: 3, backgroundColor: "#cad2c5" } }}
          rows={4}
        />

        <Button
          onClick={this.handleClick} // Call the handleClick function when the button is clicked
          style={{ backgroundColor: "#2f3e46" }}
          variant="contained"
        >
          Send
        </Button>
      </div>
    );
  }
}

export default ChatUserInputSec;
