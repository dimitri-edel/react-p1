import React, { Component } from 'react'
import Post from "./Post"
import postsData from "./posts.json";

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            name: "",
        }
    }

    componentDidMount() {
        this.setState({
            posts: postsData["savedPosts"],
        })
    }

    handleSearchChange = (event) =>{
        let inputText = event.target.value.toLowerCase()
        let filteredData = postsData["savedPosts"].filter(post=>{
            return post.name.toLowerCase().includes(inputText)
        })
        this.setState({
            posts: filteredData,
            name: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <div>
                    <label htmlFor="id-search">Search:</label>
                    <input type="text" value={this.state.name} id="id-search" placeholder='Author Name?' onChange={this.handleSearchChange} />
                    <p>{this.state.posts.length} entries found</p>
                </div>
                <div>
                    {
                        this.state.posts.map(post => {
                            return (<Post key={post.title} postData={post} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Content