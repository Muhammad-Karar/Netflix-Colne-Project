import React from 'react';
import namepic1 from '../namepic1.png';
import navbar from '../Style.css/navbar.css'
export default function Navbar() {
  return (
    <>
    <div className='navbar'>
      <img className='img1' src={namepic1} alt="" width={155} height={45}/>
      <button type="button" className='signIn-btn'>Sign In</button>
    </div>
    </>

    
  )
}
