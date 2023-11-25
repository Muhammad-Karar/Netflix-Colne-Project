import React from 'react'
import backgroundpic from '../backgroundpic.jpg';
import home from '../Style.css/home.css';
import { useState } from 'react';
import tv from '../tv.png'


export default function Home() {
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const [email, setEmail] = useState("");
  return (
    <>
      <div className='home-main-sec'>
        <div className="home-text-sec1">
          <p id='text-1'>Unlimited movies, TV shows, and more</p>
          <p id="text-2">Watch anywhere. Cancel anytime.</p>
          <p id="text-2">Ready to watch? Enter your email to create to create or restart your membership.</p>
          <input type="text" name="email-text-field" id="email-text-field" placeholder='Email address' value={email} onChange={onChangeEmail} />
          <button type="submit" id='start-btn'>Get Started > </button>
        </div>

      </div>
      <div className="home-sec-1">
        <div className="text-area1">
          <p id='text-3'>Enjoy on your TV</p>
          <p id='text-4'>Watch on smart TVs, Playstation, Xbox, Chromecast,
            Apple TV, Blu-ray players, and more.
          </p>
        </div>
        <div className="img-area1">
          <img src={tv} alt="" width={"95%"} height={"85%"}/>
        </div>
      </div>
      <div className="home-sec-2">
        
      </div>
      <div className="home-sec-3">
        
      </div>
      <div className="home-sec-4">
        <h1>Hello</h1>
      </div>
      <div className="home-sec-5">
        <h1>Hello</h1>
      </div>
    </>
  )
}
