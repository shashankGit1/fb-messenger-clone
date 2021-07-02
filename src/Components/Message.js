import React from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
function Message(msgProp, username) {
  const isUser = username === msgProp.username;

  return (
    <div>
      <Card className={`message $(isUser && 'message__user`}>
        <CardContent>
          <Typography color="pink" variant="h5" component="h2">
            {msgProp.username}:{msgProp.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;
