import React from "react";

class StatefullGreeting extends React.Component {
    // Need to pass the props to the contructor
    constructor(props) {
        // It is mandatory to pass the props to the super-class
        super(props);
        // Initialize state with all its properties
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0
        };
    }

    handleClick() {
        // It is mandatory to call setState() in order to change its properties,
        // because it will also rerender the state properties
        // Always use prevState to access previous State condition
        this.setState((prevState, prevProps) => {
            // return the new State by updateing the prevState values
            return {
                introduction: prevState.introduction === "Hello" ? "Goodbye!" : "Hello",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit",
            }
        });
    }

    // increment state.count
    increment_count() {
        this.setState((prevState, prevProps) => {
            return {
                count: prevState.count + 1,
            }
        })
    }
    // Override the render method
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <p>Clicked {this.state.count} times</p>
                <button onClick={() => this.increment_count()}>Increment</button>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }

}

export default StatefullGreeting;