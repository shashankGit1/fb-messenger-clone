import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import "./App.css";
import Message from "./Components/Message";

function App() {
  const [input, setInput] = useState(""); //To keep track of whatever is being typed into input box
  const [messages, setMessages] = useState([{username:'ashu', text:'hey guys'}, {username:'Aashu', text:'hey there'}]); //to keep track of all the messages
  const [username, setUsername] = useState(''); //Username

  //useState = variable in REACT
  //useEffect = run code on a condition in REACT 

  useEffect(() => {
    //if the [input] is blank, this code runs once when the app component loads 
    //updating a variable in react is not just varName=someNewValue
    //rather, it's setVarName('newValue')
    setUsername(prompt('Please enter your name'));
  }, [])

  // All the logic for sending messges goes here
  const sendMessage = (event) => {
    event.preventDefault(); //To prevent the website from refreshing and submitting the form bcz we used form to enable input on pressing enter key
    setMessages([
      ...messages, {username:username, text: input}
    ]); // ... to append to the end of the list of messages and store it in input
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hey there!</h1>
      <h2>Welcome, {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Type your message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}/>

          <Button
            disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}>
            Send Message
          </Button>
        </FormControl>
        </form>
        {/* Messages Themselves: Loops through the messages array and prints each message */}
        {messages.map((message) => (
          <Message username = {message.username} 
          text= {message.text}/>
        ))}
      
    </div>
  );
}

export default App;
