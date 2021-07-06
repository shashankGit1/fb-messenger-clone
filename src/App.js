import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import "./App.css";
import collection from 'firebase';
import Message from "./Components/Message";
import db from './firebase';
import firebase from "firebase";



function App() {
  const [input, setInput] = useState(""); //To keep track of whatever is being typed into input box
  const [messages, setMessages] = useState([]);/*, {username:'Aashu', text:'hey there'}]); //to keep track of all the messages*/
  const [username, setUsername] = useState(''); //Username

  // useState = variable in REACT
  // useEffect = run code on a condi tion in REACT 

  useEffect(()=> {
      //Runs once when the app component loads
      db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot( 
        snapshot => {
          setMessages(snapshot.docs.map( doc => doc.data()))
        }
      )
  }, [])

  useEffect(() => {
    //if the [input] is blank, this code runs once when the app component loads 
    //updating a variable in react is not just varName=someNewValue
    //rather, it's setVarName('newValue')
    setUsername(prompt('Please enter your name'));
  }, [])

  // All the logic for sending messges goes here
  const sendMessage = (event) => {
    event.preventDefault(); //To prevent the website from refreshing and submitting the form bcz we used form to enable input on pressing enter key

    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([
      ...messages, {username:username, text: input}
    ]); // ... to append to the end of the list of messages and store it in input
    setInput('');
  }

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
        {/* Messages Themselves: Loops through the messages array and prints each message */
        messages.map(message => (
            <Message 
              username = {username} 
              message= {message}/>
          ))
        }

    </div>
  );
}

export default App;
