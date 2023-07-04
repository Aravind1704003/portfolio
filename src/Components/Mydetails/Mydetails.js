import React from 'react'
import { useState } from 'react';
import './Mydetails.css'
import { Element } from 'react-scroll';

const Mydetails = () => {



    const [showBirthDetails, setShowBirthDetails] = useState(false);
    const [showEducationDetails, setShowEducationDetails] = useState(false);
    const [showWorkDetails, setShowWorkDetails] = useState(false);
    
  
    const handleToggleBirthDetails = () => {
      setShowBirthDetails(!showBirthDetails);
    };
  
    const handleToggleEducationDetails = () => {
      setShowEducationDetails(!showEducationDetails);
    };
  
    const handleToggleWorkDetails = () => {
      setShowWorkDetails(!showWorkDetails);
    };
  
    
  
    return (
        <Element name='perinfo' id='perinfo'>

            
      <div className="personal-details">
      <h1>MY PERSONAL INFO</h1>
        <h2 onClick={handleToggleBirthDetails}> &#9830;Birth</h2>
        {showBirthDetails && (
          <div className="details">
            <p>&#8594;I was born on April 17, 2003 in Vellore City.</p>
        
          </div>
        )}
  
        <h2 onClick={handleToggleEducationDetails}>&#9830; Education</h2>
        {showEducationDetails && (
          <div className="details">
            <p>&#8594;From starting till 10<sup>th</sup> I have completed in SDA Matric Higher Secondary School at Vellore, And completed my 10<sup>th</sup> in Apr 2018 with 85.40% . </p>
            <p>&#8594;I graduated 12<sup>th</sup> from Lakshmi Garder Higher Secondary School in May 2020 with 74.10%.</p>
            
          </div>
        )}
  
        <h2 onClick={handleToggleWorkDetails}>&#9830; College</h2>
        {showWorkDetails && (
          <div className="details">
            <p>&#8594;I joined SCSVMV UNIVERSITY at Dec 2020 . It started with Online Mode due to the pandamic situvation (Covid-19) later the physical mode of the collage started at the end of the 2<sup>nd</sup> year.</p>
            <p>&#8594;Currently I have completed 3 years of my B Tech (IT) Degree with the CGPA of 9.65.</p>
           </div>
        )}
  
        
      </div>
      </Element>
    );


//     const [showBirthDetails, setShowBirthDetails] = useState(false);

//   const handleToggleBirthDetails = () => {
//     setShowBirthDetails(!showBirthDetails);
//   };

//   return (
//     <div className="personal-details">
//       <h2 onClick={handleToggleBirthDetails}>Birth</h2>
//       {showBirthDetails && (
//         <div className="details">
//           <p>I was born on July 1, 1990 in New York City.</p>
//           {/* Add more birth details */}
//         </div>
//       )}
//       {/* Add more timeline items */}
//     </div>
//   );



    // const personalData = [
    //     {
    //       year: '1990',
    //       event: 'Birth',
    //       description: 'I was born on July 1, 1990 in New York City.',
    //     },
    //     {
    //       year: '2008',
    //       event: 'High School Graduation',
    //       description: 'I graduated from XYZ High School in June 2008 with honors.',
    //     },
    //     {
    //       year: '2012',
    //       event: 'College Degree',
    //       description: 'I earned a Bachelor\'s Degree in Computer Science from ABC University in May 2012.',
    //     },
    //     // Add more personal data objects as needed
    //   ];
    
    //   return (
    //     <div className="personal-details">
    //       <h2>My Personal Details</h2>
    //       <ul>
    //         {personalData.map((data, index) => (
    //           <li key={index}>
    //             <h3>{data.year}</h3>
    //             <h4>{data.event}</h4>
    //             <p>{data.description}</p>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
}

export default Mydetails