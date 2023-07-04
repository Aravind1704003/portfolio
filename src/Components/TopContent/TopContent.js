import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';

const TopContent = () => {
  // const handleDownloadCV = () => {
  //   const link = document.createElement('a');
  //   link.href = 'C:\\\\Users\\\\ARAVIND\\\\Downloads\\\\Aravind_S_Resume_new.pdf'; // Replace with the actual file URL or path
  //   link.download = 'Aravind_S_Resume_new.pdf'; // Set the desired file name for the downloaded file
  //   link.click();
  // };

  return (

    <div className='TopContent'>
    <div className='TopContent_Container'>
        <h1>Aravind</h1>
        <p>A JUNIOR WEB DEVELOPER</p>
        {/* <a href='https://drive.google.com/file/d/1Ig5rz4LrTYK6LABMVtmCl0W4b2kR5nWg/view' target='_blank' >
        <button className='downloadbtn'>Download CV</button>
    </a> */}
        <Link to='projects' smooth={true} duration={400}>
            <button className='wrkbtn'>MY WORK</button>
        </Link>

    </div>
</div>
    // <div className='TopContent'>
    //   <div className='TopContent_Container'>
    //     <h1>Aravind</h1>
    //     <p>A PROFESSIONAL WEB DEVELOPER</p>
    //     <a href='/C:\\\\Users\\\\ARAVIND\\\\Downloads\\\\Aravind_S_Resume_new.pdf' download>
    //       <button className='downloadbtn'>Download CV</button>
    //     </a>
    //     <Link to='projects' smooth={true} duration={400}>
    //       <button className='wrkbtn'>MY WORK</button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default TopContent;
