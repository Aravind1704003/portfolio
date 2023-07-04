import React from 'react';

const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {/* <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          Visit Project
        </a> */}
      </div>
    </div>
  );
};

export default Project;
