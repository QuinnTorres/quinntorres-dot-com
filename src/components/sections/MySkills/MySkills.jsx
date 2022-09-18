import React from 'react';
import 'components/sections/MySkills/MySkills.scss';
import MySkillsImage from 'img/MySkills.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';
import TextRepeater from 'components/text/TextRepeater/TextRepeater';

function MySkills() {
  const frameworks = [
    'Vue.js',
    'React.js',
    'Ember.js',
    'Spring Boot',
    'Gradle',
    'Maven'
  ];

  const languages = [
    'JavaScript',
    'CSS',
    'Sass',
    'FreeMarker',
    'Handlebars',
    'Java',
    'Python',
  ];

  return (
    <div className="App__Section MySkills">
      <TextRepeater text={process.env.REACT_APP_SKILLS_TITLE} count={20} />

      <SectionHeader 
          img={MySkillsImage} 
          imgAlt="A hand holding a lightbulb to the sun" 
          title={process.env.REACT_APP_SKILLS_TITLE} 
          anchor={process.env.REACT_APP_SKILLS_ANCHOR}>
        <h3 className="MySkills__SkillHeader MySkills__FrameworkHeader">
          Frameworks
        </h3>

        <ul className="MySkills__SkillList">
          {frameworks.map((framework) => (
            <li className="MySkills__Skill MySkills__Framework">
              {framework}
            </li>
          ))}
        </ul>

        <h3 className="MySkills__SkillHeader MySkills__LanguageHeader">
          Languages
        </h3>

        <ul className="MySkills__SkillList">
          {languages.map((language) => (
            <li className="MySkills__Skill MySkills__Language">
              {language}
            </li>
          ))}
        </ul>
      </SectionHeader>
    </div>
  );
}

export default MySkills;
