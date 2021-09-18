import React from 'react';

// component to handle the login screen used to get into the chatroom
class LoginScreenComponent extends React.Component {

    render() {

        return (

            <div>
                <h1 class='login-header'>Login:</h1>
                <input
                    class='login-field'
                    type='text'
                    placeholder='insert name here'
                />
                <div>
                    <button class='login-button'>
                        Find Room
                    </button>
                </div>
            </div>
        )
    }
}

export default LoginScreenComponent;