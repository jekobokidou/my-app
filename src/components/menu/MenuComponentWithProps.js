import React from 'react'
import './MenuComponentWithProps.css'

const MenuComponentWithProps = ({connected}) => {

    return (
        <div>
            <span><a className="Menu-link" href="#">Home</a></span>
            <span>|</span>
            <span><a className="Menu-link" href="#">Dashboard</a></span>
            <span>|</span>
            <span><a className="MenuConnected-link" href="#">{connected ? "Logout" : "Login"}</a></span>
        </div>
    )
} 

export default MenuComponentWithProps