import React from 'react';
import { useState, useEffect } from 'react';
import './Chrono.css';

export const Chrono = () => {
    const [counter, setCounter] = useState(1800);
    const [isActive, setIsActive] = useState(true);
  
    useEffect(() => {
      let timer;
      if (isActive && counter > 0) {
        timer = setTimeout(() => setCounter(counter - 1), 1000);
      }
      return () => clearTimeout(timer);
    }, [counter, isActive]);
  
    const handlePauseResume = () => {
      setIsActive(!isActive);
    };
  
    const handleReset = () => {
      setIsActive(false);
      setCounter(1800);
    };
  
    return (
      <div className="chrono">
        <div className='countdown'>
            <p>Countdown test:</p>
            <p>{counter}</p>
        </div>
        <div className='buttons'>
            <button 
                onClick={handlePauseResume} 
                className="resume"
                style={{
                    width: 'fit-content',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    fontSize: '3rem',
                    transition: 'all 0.3s ease',
                    backgroundColor: isActive ? 'black' : 'blue',
                    color: isActive ? 'blue' : 'black',
                    border: `2px solid ${isActive ? 'blue' : 'black'}`
                }}
                >
                {isActive ? 'Pause' : 'Play'}
                </button>
            <button onClick={handleReset} className='reset'>Reset</button>
        </div>
      </div>
    );
}
