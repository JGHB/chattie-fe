import React from 'react';
import ChatMessageComponent from './ChatMessageComponent';

// component that handles a chatbox within the chatscreen, contins messages
// between parties
class ChatBoxComponent extends React.Component {

    render() {

        return (

            <div>
                <ChatMessageComponent />
                <input
                    type='text'
                    placeholder='type message here'
                />
                <button>Send</button>
            </div>
        )
    }
}

export default ChatBoxComponent;