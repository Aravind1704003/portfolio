import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Components/Header/Header';
import TopContainer from './Components/TopContainer/TopContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import Mydetails from './Components/Mydetails/Mydetails';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';

const App = () => {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Header />
      <TopContainer />
      <Mydetails />
      <SkillContainer />
      <ProjectContainer />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
