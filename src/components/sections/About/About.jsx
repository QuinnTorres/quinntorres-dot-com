import React from 'react';
import 'components/sections/About/About.scss';
import ProfilePicture from 'img/profile.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function About() {
  return (
    <div className="About">
      <SectionHeader img={ProfilePicture} imgAlt="Profile" title="About Me" anchor="about-me"/>
    </div>
  );
}

export default About;
