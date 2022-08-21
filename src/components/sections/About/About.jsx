import React from 'react';
import ProfilePicture from 'img/profile.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';
import TextLink from 'components/navigation/TextLink/TextLink';

function About() {
  return (
    <div className="About">
      <SectionHeader img={ProfilePicture} imgAlt="Profile" title="Hello!" anchor="about-me">
        <p>
        I'm a senior front-end developer at <TextLink href="https://www.dotdashmeredith.com/">Dotdash Meredith</TextLink>, the largest digital publisher in the US. I have 3 years experience developing performance-first sites, which are among the <TextLink href="https://webperf.xyz">fastest on the web</TextLink>. I also have experience with:
        </p>
        <ul>
          <li>⚛️ React.js (this site)</li>
          <li>✅ Vue.js</li>
          <li>🐹 Ember.js</li>
        </ul>
        <p>
        I graduated from Columbia University with a BS in Computer Science and a minor in Economics. I'm passionate about improving documentation, dev tooling, and processes!
        </p>
        <ul>
          <li>📫 <TextLink href={process.env.REACT_APP_EMAIL}>Send me an email</TextLink></li>
          <li>💼 <TextLink href={process.env.REACT_APP_LINKEDIN}>Find me on LinkedIn</TextLink></li>
          <li>👨🏻‍💻 <TextLink href={process.env.REACT_APP_GITHUB}>View my projects on GitHub</TextLink></li>
        </ul>
      </SectionHeader>
    </div>
  );
}

export default About;
