import * as React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";
import "./ChatUserInputSec.css";

class ChatUserInputSec extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };

    // Bind the pressEnter function to the correct value of "this"
    this.pressEnter = this.pressEnter.bind(this);
  }

  pressEnter(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
      this.handleClick();
      // put the login here
    }
  }

  handleInputChange = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };
  handleClick = () => {
    const newChatItem = {
      content: this.state.inputText,
      name: "Ahmad",
      role: "user",
    };
    window.scrollTo(0, document.body.scrollHeight);

    this.props.addChatItem(newChatItem);

    this.setState({
      inputText: "",
    });

    // Set the headers for the API key
    const config = {
      // headers: {
      //   "Appian-API-Key":
      //     "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NTY0NTU4Mi1kYzJlLTRkNmYtYWQ3YS02NGJiNTc1ZTBkYWQifQ.qvBFLvd3S9LQivUGaKo1agqb1X5ZTBHPyVFI8VqBgmU", // Replace "your-api-key" with your actual API key
      // },
    };
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    // Make API call using axios with the headers
    axios
      .post(
        apiUrl+ "/chat-gpt",
        {
          model: "gpt-3.5-turbo",
          messages: [...this.props.chatItems, newChatItem], // Include the new chat item
          loggedInUser: "Ahmad",
        },
        config
      )
      .then((response) => {
        // Handle the response from the API
        const alteredResponse = response.data.choices[0].message;
        alteredResponse["name"] = "Assistant";
        alteredResponse["role"] = "assistant";
        console.log(alteredResponse);
        this.props.addChatItem(alteredResponse);
        // this.handleInputChange("");
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error(error);
      });

    //empty feild
  };

  render() {
    return (
      <div className="ChatUserInputSec">
        <TextField
          required
          style={{ flexGrow: 5 }}
          id="outlined-multiline-flexible"
          label="write to AI"
          multiline
          InputProps={{ sx: { borderRadius: 3, boxShadow: "2px 3px 0px 1px #888888" } }}
          rows={4}
          value={this.state.inputText}
          onChange={this.handleInputChange}
          onKeyUp={this.pressEnter}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={this.handleClick} // Call the handleClick function when the button is clicked
            style={{ backgroundColor: "#2f3e46", width: "10%" }}
            variant="contained"
          >
            Send
          </Button>
          <Button
            onClick={this.props.resetChatItems} // Call the handleClick function when the button is clicked
            variant="contained"
            style={{ width: "10%" }}
            color="error"
          >
            reset
          </Button>
        </div>
      </div>
    );
  }
}

export default ChatUserInputSec;
