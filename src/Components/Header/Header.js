import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'



const Header = () => {
  return (
    <div className='header'>
    <div className='header_left'>
       
       <h1>Junior</h1> <h1>Develop<span>er</span></h1>
    </div>
    <div className='header_right'>
        <Link to='about' smooth={true} >
            <h4>About</h4>
        </Link>

        <Link to='perinfo' smooth={true} >
            <h4>Personal Info</h4>
        </Link>

        <Link to='skills' smooth={true} >
            <h4>Skills</h4>
        </Link>

        <Link to='projects' smooth={true}>
            <h4>Projects</h4>
        </Link>

        <Link to='exp' smooth={true} >
            <h4>Experience</h4>
        </Link>
       

        <Link to='contact' smooth={true} >
            <h4>Contact</h4>
        </Link>





    </div>
    </div>
  )
}

export default Header