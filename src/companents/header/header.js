import React from 'react';
import './header.css';

export default function Header() {
    return (
    <div className='header'>
      <div className="container">
        <div className="header__box d-flex align-items-center justify-content-between">
          <div className="header__inner d-flex align-items-center">
            <span className='text-capitalize header__eng'>en</span>
            <i className='bx bx-location-plus'></i>
            <span className='header__location'>Austin, TX</span>
            <i className='bx bx-chevron-down' ></i>
          </div>
          <div className="header__wrapper d-flex align-items-center">
            <a href='#' className='header__number'>+1 (800) 532 6220</a>
            <a href="#" className='header__number text-capitalize'>Help center</a>
          </div>
        </div>
      </div>
    </div>
  );
}
