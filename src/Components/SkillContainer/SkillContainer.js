// import React from 'react'
// import { Element } from 'react-scroll'
// import aravind from '../TopContainer/TopContainer'

// const SkillContainer = () => {
//   return (
//     <Element className='skillcontainer' id='skills'>
// <div className='skillcontainer_image'>
//     <img src={aravind} alt="" />
//     <p>test</p>
// </div>

//     </Element>
//   )
// }

// export default SkillContainer




import React from 'react';
import download from'./photo.jpeg'
import './SkillContainer.css'

const SkillSet = () => {
  return (
    <div className="skill-set">
     
      <div className="image-container">
        <img src={download} alt="Profile" />
      </div>
      
      
        <div className="skills">
        <h1 className="skills-heading">My Skills</h1>
        <ul className="skills-list">
          <li>HTML</li>
          
<progress value="80" max="100" style={{ backgroundColor: "red" }}>
  <span className='span'>50%</span>
</progress>

          <li>CSS</li>
          <progress value="70" max="100" style={{ backgroundColor: "red" }}>
  <span className='span'>70%</span>
</progress>


<li>Node.js</li>
          <progress value="50" max="100" style={{ backgroundColor: "red" }}>
  <p><span className='span'>50%</span></p>
</progress>
          

<li>java</li>
          <progress value="70" max="100" style={{ backgroundColor: "red" }}>
  <p><span className='span'>70%</span></p>
</progress>

<li>python
  
</li>
          <progress value="60" max="100" style={{ backgroundColor: "red" }}>
  <p><span className='span'>60%</span></p>
</progress>

          
          <li>JavaScript</li>

          <progress value="50" max="100" style={{ backgroundColor: "red" }}>
  <span className='span'>50%</span>
</progress>
          <li>React</li>

          <progress value="50" max="100" style={{ backgroundColor: "red" }}>
  <span className='span'>50%</span>
</progress>
          {/* Add more skills */}
        </ul>
      </div>
    </div>
  );
};

export default SkillSet;

