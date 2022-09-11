import React from 'react';
import 'components/sections/MySkills/MySkills.scss';
import MySkillsImage from 'img/MySkills.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function MySkills() {
  const skills = [
    'Vue.js',
    'React.js',
    'Ember.js',
    'Spring Boot',
    'Gradle',
    'Maven',
    'JavaScript',
    'CSS',
    'Sass',
    'FreeMarker',
    'Handlebars',
    'Java',
    'Python',
  ];

  return (
    <div className="MySkills">
      <SectionHeader 
          img={MySkillsImage} 
          imgAlt="A hand holding a lightbulb to the sun" 
          title={process.env.REACT_APP_SKILLS_TITLE} 
          anchor={process.env.REACT_APP_SKILLS_ANCHOR}>
        <ul className="MySkills__SkillList">
          {skills.map((skill) => (
            <li className="MySkills__Skill">
              {skill}
            </li>
          ))}
        </ul>  
      </SectionHeader>
    </div>
  );
}

export default MySkills;
