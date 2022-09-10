import React from 'react';
import 'components/sections/MyExperience/MyExperience.scss';
import MyExperienceImage from 'img/MyExperience.jpg';
import DDMImage from 'img/DDM.jpg';
import ColumbiaImage from 'img/Columbia.jpg';
import DotdashImage from 'img/Dotdash.jpg';
import VestorlyImage from 'img/Vestorly.jpg';
import ADIImage from 'img/ADI.jpg';
import UTSWImage from 'img/UTSW.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function MyExperience() {
  const experiences = [
    {
      image: DDMImage,
      place: 'Dotdash Meredith',
      title: 'Senior Front-End Engineer',
      notes: [
        'Improved a site’s PageSpeed from 43 to 96',
        'Given the inaugural product development principles award',
        'Shortened onboarding from 2 months to 2 weeks through documentation',
        'Built a custom AMP framework',
        'Completely replatformed 2 acquisitions'
      ]
    },
    {
      image: ColumbiaImage,
      place: 'Columbia Advising',
      title: 'Computer Science Tutor',
      notes: [
        'Established custom lesson plans for 1-on-1 tutoring sessions',
        'Led group tutoring sessions'
      ]
    },
    {
      image: DotdashImage,
      place: 'Dotdash',
      title: 'Full Stack Engineering Intern',
      notes: [
        'Developed a Vue.js faceted search experience',
        'Integrated the Google Places API into a back-end service'
      ]
    },
    {
      image: VestorlyImage,
      place: 'Vestorly',
      title: 'Front-End Engineering Intern',
      notes: [
        'Met with stakeholders and built a calendar of scheduled user events',
        'Used Ember.js and open-source addons for the single-page app'
      ]
    },
    {
      image: ADIImage,
      place: 'ADI: Labs',
      title: 'Full Stack Developer',
      notes: [
        'Created a marketplace for student textbooks',
        'Constructed an API for college course reviews through Facebook Messenger'
      ]
    },
    {
      image: UTSWImage,
      place: 'UTSW Medical Center',
      title: 'Engineering Research Intern',
      notes: [
        'Programmed an app for controlling a custom motion device in an MRI',
        'Published research in the Journal of Magnetic Resonance'
      ]
    },
  ];

  return (
    <div className="MyExperience">
      <SectionHeader img={MyExperienceImage} imgAlt="Circuit board" title={process.env.REACT_APP_EXPERIENCE_TITLE} anchor={process.env.REACT_APP_EXPERIENCE_ANCHOR}>
        {experiences.map(({image, place, title, notes}) => (
          <div className="MyExperience__Wrapper" key={place}>
            <img className="MyExperience__Image" src={image} alt={`${place} logo`} />

            <div className="MyExperience__Summary">
              <h3 className="MyExperience__Place">{place}</h3>
              <span className="MyExperience__Title">{title}</span>
            </div>

            <ul className="MyExperience__Notes">
              {notes.map(note => (
                <li className="MyExperience__Note" key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </SectionHeader>      
    </div>
  );
}

export default MyExperience;
