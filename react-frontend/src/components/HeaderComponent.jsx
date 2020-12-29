import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://github.com/AkashBhuiyan" className="navbar-brand">Employee Management App</a></div>
                
                    <div style={{marginLeft: "1100px"}}><a href="/employees" className="navbar-brand">Home</a></div>
                    <div style={{marginLeft: "20px"}}><a href="#about" className="navbar-brand">About</a></div>
                    
                    </nav>
                </header>
            </div>
        )
    }
}
