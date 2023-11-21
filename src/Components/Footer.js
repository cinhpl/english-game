import React from 'react';
import './Styles.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <p className='copyright'>Traffic Race @Copyright {(new Date().getFullYear())}</p>
    </div>
  )
}
