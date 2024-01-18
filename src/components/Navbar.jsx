import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser } from '@fortawesome/free-regular-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light  ">
                    <a className="navbar-brand" href="">Heaven</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       
                        <div className="nav-menu">
                        <a href='/' className='nav-item nav-btn'>Home</a>
                        <a href='/' className='nav-item nav-btn'>Products</a>
                        <a href='/' className='nav-item nav-btn'>News</a>
                        <a href='/' className='nav-item nav-btn'>Contact</a>

                        </div>
                        <div>
                            <FontAwesomeIcon  className="item" icon={faUser} ></FontAwesomeIcon>
                            <FontAwesomeIcon  className="item" icon={faBagShopping}></FontAwesomeIcon>

                        </div>
                       
                       </div>
                </nav>
    </div>
    </div>
    </>
  )
}

export default Navbar