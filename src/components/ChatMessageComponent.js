import React from "react";

// component that handles actual chat messages being sent by users
// within the chat box
class ChatMessageComponent extends React.Component {

    render() {

        return (
            <ul>
                <li>user1: hi</li>
                <li>user2: hello</li>
            </ul>
        )
    }
}

export default ChatMessageComponent;