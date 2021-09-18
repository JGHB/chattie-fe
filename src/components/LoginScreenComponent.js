import React from 'react';
import './../App.css'

// component to handle the login screen used to get into the chatroom
class LoginScreenComponent extends React.Component {

    // constructor for login screen
    constructor(props) {

        super(props)
        // handle state for login screen
        this.state = {

            nameValue: ''
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.invalidName = this.invalidName.bind(this);
    }

    // send an error message when no name is type in the name field
    invalidName() {
        
        if (this.state.nameValue === '') {
            alert('please enter a name')
        }
    }

    // tracks value of name input field
    handleNameInput(event) {

        this.setState({nameValue: event.target.value}) 
    }

    render() {

        return (

            <div class='login-container'>
                <h1 class='login-header'>Login:</h1>
                <input
                    class='login-field'
                    type='text'
                    placeholder='insert name here'
                    value={this.state.nameValue}
                    onChange={this.handleNameInput}
                />
                <div>
                    <button class='login-button' onClick={this.invalidName}>
                        Find Room
                    </button>
                </div>
            </div>
        )
    }
}

export default LoginScreenComponent;