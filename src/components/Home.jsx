import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-branding">
            <div>ESCAPE TO A WORLD OF</div>
            <div className='branding-2'>BLISSFUL <br /> AROMAS</div>
            <div> WITH OUR PERFUMES</div>
           </div>
       <span className="shop-container">
            <span style={{fontSize: "1rem"}}>Shop Now &nbsp;  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </span>
       </span> 
    </div>
  )
}

export default Home