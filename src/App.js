import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); //To keep track of whatever is being typed into input box
  console.log(input);

  const [messages, setMessages] = useState([]); //to keep track of all the messages
  console.log(messages);

  // All the logic for sending messges goes here
  const sendMessage = (event) => {
    event.preventDefault(); //To prevent the website from refresing and submitting the form bcz we used form to enable input on pressing enter key
    setMessages([...messages, input]); // ... to append to the end of the list of messages and store it in input
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hey there!</h1>

      <form>
        <FormControl>
          <InputLabel>Type your message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}>
            Send Message
          </Button>
          <Message/>
        </FormControl>
        {/* Input field */}
        {/* Button */}
        
        {/* Messages Themselves: Loops through the messages array and prints each message */}
        {messages.map((message) => (
          <p>{message}</p>
        ))}
      </form>
    </div>
  );
}

export default App;
