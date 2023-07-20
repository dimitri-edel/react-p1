import React, { Component } from 'react'
import importedNames from "../names"

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            category: "general",
            comment: "",
            names: importedNames,
        }
    }
    // Use JavaScript feature called computed field property names
    // This way you can use one event-handler for multiple fields
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    // Designated event-handler, filter the search results
    handleSearchChange = (event) => {
        let inputText = event.target.value.toLowerCase();
        let filteredNames = importedNames.filter(name=>{
            return name.toLocaleLowerCase().includes(inputText)
        })
        this.setState({
            name: event.target.value,
            names: filteredNames,
        })
    }
    // Designated event-handler
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    // Designated event-handler
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    // handle the form submission
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>ControlledForm</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="id-search">Search:</label>
                        <input tpye="text" id="id-search" name="name" value={this.state.name} onChange={this.handleSearchChange} />
                    </div>
                    <div>
                        <label htmlFor="id-category">Select Category:</label>
                        <select id="id-category" name="category" value={this.state.category} onChange={this.handleChange}>
                            <option value="website">Website issue</option>
                            <option value="order">Order Issue</option>
                            <option value="general">General Inquiry</option>
                        </select>
                    </div>
                    <div>
                        <textarea id="id-comment" name="comment" value={this.state.comment} onChange={this.handleChange}/>
                    </div>
                    <input type="submit" value="submit"/>
                </form>
                <div>                    
                    <h3>Names found: {this.state.names.length}</h3>
                    <div>
                        {
                            this.state.names.map(name=>{
                                return (
                                    <p key={name}>{name}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlledForm