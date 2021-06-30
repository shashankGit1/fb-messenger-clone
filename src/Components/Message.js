import React from 'react'

function Message(msgProp) {
    return (
        <div>
            <h2>{msgProp.username} : {msgProp.text}</h2>
            
        </div>
    )
}

export default Message
