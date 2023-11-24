import React  from 'react'
import { Link } from 'react-router-dom';
import './Styles.css';
import logo from '../Assets/logoTR.png';

export const Header = () => {


  return (
    <div className='header'>
        <div className='nav'>
            <div className='nav-link'>
            <img src={logo} alt="logo"/>
                <ul>
                    <li>
                        <Link to="/timer" style={{color: "#FCCD0E:", background: "#F05448"}}>Timer</Link>
                    </li>
                    <li>
                        <Link to="/rules" style={{color: "#F05448", background: "rgb(72 41 161)"}}>Rules</Link>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
  )
}