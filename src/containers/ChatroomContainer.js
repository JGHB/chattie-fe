import React from 'react';
import ChatScreenComponent from '../components/ChatScreenComponent';
import LoginScreenComponent from '../components/LoginScreenComponent';

// main container to hold all contents of the chatroom
class ChatRoomContainer extends React.Component {

    render() {

        return (

            <div>
                <LoginScreenComponent />
                <ChatScreenComponent />
            </div>
        )
    }
}

export default ChatRoomContainer