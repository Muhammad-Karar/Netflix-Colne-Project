import React from 'react'
import backgroundpic from '../backgroundpic.jpg';
import home from '../Style.css/home.css';
import { useState } from 'react';
import tv from '../tv.png'
import mobile from '../mobile.jpg'
import kids from '../kids.png'

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
          <button type="submit" id='start-btn'>Get Started  </button>
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
          <img src={tv} alt="" width={"95%"} height={"85%"} />
          <div data-uia="nmhp-card-animation-asset-motion" class="video-class">
            <video width={"87.5%"} height={"85%"} data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="">
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video><div class="default-ltr-cache-0">
            </div>
            <div data-uia="nmhp-card-animation-asset-custom" aria-hidden="true" class="default-ltr-cache-0 e15c37ii13">
            </div>
          </div>
        </div>
      </div>
      <div className="home-sec-2">
        <div className="img-area2">
          <img src={mobile} alt="" width={"100%"} height={"480px"} />
          <div className='mob-sec-2'>
            <div id='mob-u-pic'>
              <div data-uia="nmhp-card-animation-asset-motion" className="default-ltr-cache-xfttou e15c37ii6">
                <div className="default-ltr-cache-1cn8kex">
                  <img width={"120%"} height={"85px"} data-uia="nmhp-card-animation-asset-animation" alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className="default-ltr-cache-1t1z3a4" />
                </div>
              </div>
            </div>
            <div className="default-ltr-cache-tcf860">
              <div id="mob-txt-1" className="default-ltr-cache-162uqtg e15c37ii4" data-uia="">Stranger Things</div>
              <div id="mob-txt-2" className="default-ltr-cache-44ib4m e15c37ii3" data-uia="">Downloading...</div>
            </div>
            <div data-uia="nmhp-card-animation-asset-custom" aria-hidden="true" className="default-ltr-cache-1q4up1i e15c37ii5">
            </div>
          </div>
        </div>
        <div className="text-area2">
          <p id='text-3'>Download your shows to watch offline</p>
          <p id='text-4'>Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
      <div className="home-sec-3">
        <div className="text-area3">
          <p id='text-3'>Watch everywhere</p>
          <p id='text-4'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
      </div>
      <div className="home-sec-4">
        <div className="img-area2">
          <img src={kids} alt="" width={"100%"} height={"480px"} />
        </div>
        <div className="text-area4">
          <p id='text-3'>Create profiles for kids</p>
          <p id='text-4'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      <div className="home-sec-5">
        <h1>Hello</h1>
      </div>
    </>
  )
}
