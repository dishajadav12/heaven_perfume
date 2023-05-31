import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-branding">
            <p>ESCAPE TO A WORLD OF</p>
            <p style={{fontSize:'5em'}}>BLISSFUL <br /> AROMAS</p>
            <p> WITH OUR PERFUMES</p>
           </div>
       <span className="shop-container">
            <span>Shop Now <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </span>
       </span>
    </div>
  )
}

export default Home