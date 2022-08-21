import React from 'react';
import 'components/sections/MyExperience/MyExperience.scss';
import MyExperienceImage from 'img/MyExperience.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function MyExperience() {
  return (
    <div className="MyExperience">
      <SectionHeader img={MyExperienceImage} imgAlt="Circuit board" title="Experience" anchor="experience">
      </SectionHeader>      
    </div>
  );
}

export default MyExperience;
