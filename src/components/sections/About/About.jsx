import React from 'react';
import 'components/sections/About/About.scss';
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
      </SectionHeader>
    </div>
  );
}

export default About;
