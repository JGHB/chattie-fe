import React from "react";
import ChatBoxComponent from "./ChatBoxComponent";

// component to handle the actual chatroom screen
class ChatScreenComponent extends React.Component {

    render() {
        
        return (
            
            <div>
                <h1>Chat Room #IDNumberHere</h1>
                <ChatBoxComponent />
            </div>
        )
    }
}

export default ChatScreenComponent;