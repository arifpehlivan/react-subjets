import React, { useContext } from 'react'
import {ThemeData} from '../App'

const Context = () => {
    return (
        <div style={useContext(ThemeData)}>
            <h1>Context</h1>
            <h2>Usecontext</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    )
}

export default Context