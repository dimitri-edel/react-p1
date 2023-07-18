import React from "react";
import styles from './NavBar.module.css';
import LoginForm from "./LoginForm";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Guest!",
            buttonText: "Login",
            isLoggedIn: false,
            displayLogin: false,
        }
    }

    on_click() {
        // If the user is logged in, then run signOut() method
        // else show the LoginForm
        this.setState((prevState, prevProps) => {
            if (this.state.isLoggedIn) {
                this.signOut();
            } else {
                return {
                    displayLogin: true,
                }
            }

        })
    }

    handleSignIn = () => {
        this.setState({
            buttonText: "Logout",
            isLoggedIn: true,
            displayLogin: false,
            message: "Welcome, User!",
        });
        console.log("signIn()");
    }

    signOut = () => {
        this.setState((prevState, prevProps) => {
            return {
                message: "Goodbye User!",
                buttonText: "Login",
                isLoggedIn: false,
            }
        })
    }

    render() {
        return (
            <div>
                <div className={styles.navbar}>
                    <h1>My Gallery</h1>
                    <ul>
                        <li>{this.state.message}</li>
                        <li><button onClick={() => this.on_click()}>{this.state.buttonText}</button></li>
                    </ul>
                </div>
                <div>
                    <LoginForm displayLogin={this.state.displayLogin} handleSignIn={this.handleSignIn} />
                </div>                
            </div>
        )
    }
}

export default NavBar;