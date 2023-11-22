import React  from 'react'
import { Link } from 'react-router-dom';
import './Styles.css';
import logo from '../logoTR.png';

export const Header = () => {

  return (
    <div className='header'>
        <div className='nav'>
        <div className='loading-container'>         
            </div>
                <div className='nav-link'>
                <img src={logo} alt="logo"/>
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
    </div>
  )
}
