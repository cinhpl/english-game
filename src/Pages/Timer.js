import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';
import { Header } from '../Components/Header';
import soundStart  from '../sound-start.mp3';
import useSound from 'use-sound';
import { Footer } from '../Components/Footer';
import red from '../hard.png';
import orange from '../medium.png';


export const Timer = () => {
    const [counter, setCounter] = useState(1800);
    const [isActive, setIsActive] = useState(false);
    const [countdown, setCountdown] = useState(null);
    const [play] = useSound(soundStart);

    const audioRef = useRef(null);
  
    useEffect(() => {
      let timer;
      if (isActive && counter > 0) {
        timer = setTimeout(() => setCounter(counter - 1), 1000);
      }
      return () => clearTimeout(timer);
    }, [counter, isActive]);

    useEffect(() => {
      let countdownTimer;
      if (countdown > 0) {
        countdownTimer = setTimeout(() => setCountdown(countdown - 1), 1200);
      } else if (countdown === 0) {
        setIsActive(true);
        setCountdown(null);
      }
      return () => clearTimeout(countdownTimer);
    }, [countdown]);
  
    const handleStart = () => {
      if (!isActive && countdown === null) {
        setCountdown(4);
        play()
      }
    };
    const handlePauseResume = () => {
      setIsActive(!isActive);
    };
  
    const handleReset = () => {
      setIsActive(false);
      setCounter(1800);
      setCountdown(null);
    };
  
    return (
      <div className="chrono">
        <Header />
        <div className='countdown'>
        <p>Countdown :</p>
        <p>{countdown !== null ? '' : counter}</p>
        {countdown !== null && (
          <div style={{ display: 'flex' }}>
            {countdown > 1 && <div className={countdown === 4 ? 'circle red active' : 'circle red'}></div>}
            {countdown > 1 && <div className={countdown === 3 ? 'circle orange active' : 'circle orange'}></div>}
            {countdown > 1 && <div className={countdown === 2 ? 'circle green active' : 'circle green'}></div>}
            {countdown === 1 ? <p>START</p> : <div className='circle blue'></div>}
            <audio ref={audioRef} src={soundStart} />
          </div>
        )}
        </div>
        <div className='buttons'>
            {!isActive && countdown === null && counter === 1800 && (
                <button onClick={handleStart} className='start'>START TIMER</button>
            )}
            {isActive && (
                <button onClick={handlePauseResume} className='pause'>PAUSE</button>
            )}
            {!isActive && counter < 1800 && (
                <button onClick={handlePauseResume} className='play'>PLAY</button>
            )}
            <button onClick={handleReset} className='reset'>Reset</button>
        </div>
        <Footer />
      </div>
    );
}