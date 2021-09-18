import React from 'react';
import ChatscreenComponent from '../components/ChatscreenComponent';
import LoginComponent from '../components/LoginComponent';

// main container to hold all contents of the chatroom
class ChatroomContainer extends React.Component {

    render() {

        return (

            <div>
                <LoginComponent />
                <ChatscreenComponent />
            </div>
        )
    }
}

export default ChatroomContainer