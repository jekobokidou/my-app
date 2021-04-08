import React from 'react'
import './MenuSimpleComponent.css'

const MenuSimpleComponent = () => {

    return (
        <div>
            <span><a className="Menu-link" href="#">Home</a></span>
            <span>|</span>
            <span><a className="Menu-link" href="#">Dashboard</a></span>
        </div>
    )
} 

export default MenuSimpleComponent