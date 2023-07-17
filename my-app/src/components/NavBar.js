import React from "react";
import styles from './NavBar.module.css';
import NavBarForm  from "./NavBarForm";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello Guest!",
            buttonText: "Login",
            isLoggedIn: false,
        }
    }

    on_click() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello Guest!" ? "Welcome back , User!" : "Hello Guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login",
                isLoggedIn: prevState.isLoggedIn ? false : true,
            }

        })
    }

    singIn = () => {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello Guest!" ? "Welcome back , User!" : "Hello Guest!",
                buttonText: prevState.buttonText === "Login" ? "Logout" : "Login",
                isLoggedIn: prevState.isLoggedIn ? false : true,
            }

        })
    }
    
    render() {
        return (
            <div className={styles.navbar}>
                <h1>My Gallery</h1>
                <ul>
                    <li>{this.state.message}</li>
                    <li><button onClick={()=> this.on_click()}>{this.state.buttonText}</button></li>
                </ul>
                <NavBarForm isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    }
}

export default NavBar;