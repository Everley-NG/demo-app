import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='menu'>
            <ul className='menuItems'>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/quiz'>Quiz</Link>
                </li>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/exercises'>Exercises</Link>
                </li>
                <li>
                    <Link to='/botchat'>Botchat</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
