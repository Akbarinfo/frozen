import React from 'react'
import './tabel.css';

export default function Item(){
  const title = ['Overview', 'Nutritionals', 'Palette/Case Configuration', 'Shipping/Storage', 'Docs & Certs']
  return (
    <ul className='m-0 d-flex p-0 list-unstyled'>
      {title.map((item, i) =>{
        return <li key={i} className='info-item active'><button className='info-links'>{item}</button></li>
      })}
    </ul>
  )
}