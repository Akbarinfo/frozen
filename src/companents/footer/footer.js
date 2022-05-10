import React from 'react'
import './footer.css';
import Footitem from './footeritem.js'

// images
import FooterLogo from '../../images/logo.svg'

export default function Footer(){
  return (
      <footer className="footer-part">
        <div className="container">
         <div className="d-flex footer-inner">
           <div className="col-2 footer-left me-5">
             <div className='mb-2'>
               <a href="#"><img className="nav-logo" src={FooterLogo} width='100' height='40'></img></a>
             </div>

             <p className="footer-text mb-4">ePallet 2017. All rights reserved</p>
             <ul className="m-0 p-0 d-flex list-unstyled">
               <li className="me-3">
                 <a href="#"><i className='bx footer-icon bxl-twitter' ></i></a>
               </li>
               <li className="me-3">
                 <a href="#"><i className='bx footer-icon bxl-facebook' ></i></a>
               </li>
               <li className="me-3">
                 <a href="#"><i className='bx footer-icon bxl-instagram' ></i></a>
               </li>
               <li>
                 <a href="#"><i className='bx footer-icon bxl-youtube' ></i></a>
               </li>
             </ul>
           </div>

           <Footitem />
          </div>
        </div>
     </footer>
  )
}