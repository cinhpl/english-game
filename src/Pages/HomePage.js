import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import 'animate.css';

export const HomePage = () => {
  return (
    <div className='homepage'>
      <h2 className="animate_animated animate_bounceInLeft" >
        Traffic Race
      </h2>
      <Link to="/timer">Timer</Link>
      <Link to="/rules">Rules</Link>
    </div>

  )
}