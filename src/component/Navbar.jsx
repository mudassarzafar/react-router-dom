import React from 'react'
import "./style.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
         <ul>
              <li >
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">About</NavLink>
                </li>
                <li>
                <NavLink to="/tool">tool</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navbar