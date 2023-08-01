import React from 'react'
import './Experience.css'
import { Element } from 'react-scroll'

const Experience = () => {
  return (
    <Element id='exp' name='exp'>
    <div className="experience">
    <h1>Experience</h1>
    <div className="experience-item">
      <h2><u>Hischip</u></h2>
      <p>Position: Intern</p>
      <p>Duration: July 2023 - Aug 2023</p>
      <ul>
        <li>Assisted in web development projects</li>
        <li>Collaborated with team members on coding tasks</li>
      </ul>
    </div>
  </div>
  </Element>
  )
}

export default Experience