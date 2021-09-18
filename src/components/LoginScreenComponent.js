import React from 'react';
import './../App.css'
import ErrorMessageComponent from './ErrorMessageComponent';

// component to handle the login screen used to get into the chatroom
class LoginScreenComponent extends React.Component {

    // constructor for login screen
    constructor(props) {

        super(props)
        // handle state for login screen
        this.state = {

            nameValue: '',
            invalidNameErorr: false
        };

        this.handleNameInput = this.handleNameInput.bind(this);
        this.invalidName = this.invalidName.bind(this);
    }

    // send an error message when no name is type in the name field
    invalidName() {
        
        if (this.state.nameValue === '') {

            this.setState({invalidNameErorr: true});
        }
        
        else {
            this.setState({invalidNameErorr: false});
        }
    }

    // tracks value of name input field
    handleNameInput(event) {

        this.setState({nameValue: event.target.value}) 
    }

    render() {

        // error message to send when login fails
        const failedLogin = 'Login Failed: Enter a Name';

        return (

            <div class='login-container'>
                {
                    this.state.invalidNameErorr &&
                    <ErrorMessageComponent errorMsg={failedLogin}/>
                }
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