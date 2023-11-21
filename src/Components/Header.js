import React from 'react'
import { Link } from 'react-router-dom';
import './Styles.css';

export const Header = () => {
  return (
    <div className='header'>
        <div className='nav'>
            <h1>Traffic Race</h1>
            <ul>
                <li>
                    <Link to="/" style={{color: "#2eb458"}}>Home</Link>
                </li>
                <li>
                    <Link to="/timer" style={{color: "#FCCD0E:"}}>Timer</Link>
                </li>
                <li>
                    <Link to="/rules" style={{color: "#F05448"}}>Rules</Link>
                </li>
        </ul> 
        </div>
       
    </div>
  )
}
