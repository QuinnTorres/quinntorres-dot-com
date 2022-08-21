import React from 'react';
import 'components/sections/MyExperience/MyExperience.scss';
import MyExperienceImage from 'img/MyExperience.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';

function MyExperience() {
  const experiences = [
    {
      place: 'Dotdash Meredith',
      title: 'Senior Front-End Engineer',
      notes: [
        'Improved a site’s PageSpeed from 43 to 96 by refactoring resource download timelines and reducing payload sizes',
        'Given the inaugural product development principles award, nominated by coworkers',
        'Shortened onboarding from 2 months to 2 weeks by helping create 200+ new tech documents and a course of assignments as part of a documentation guild',
        'Built a custom AMP framework used by 10+ company sites for AMP support in less than 2 weeks',
        'Completely replatformed 2 acquisition sites, one of which grew traffic by 4x'
      ]
    },
    {
      place: 'Columbia Student Advising',
      title: 'Computer Science Tutor',
      notes: [
        'Established custom lesson plans for 1-on-1 tutoring sessions with other college students',
        'Led group tutoring sessions on topics such as Data Structures & Algorithms and Computer Science Theory'
      ]
    },
    {
      place: 'Dotdash',
      title: 'Full Stack Engineering Intern',
      notes: [
        'Developed a Vue.js faceted search experience for filtering over 10,000 recipes by 7 different fields',
        'Integrated the Google Places API into a back-end service for location information available on 4,000+ articles'
      ]
    },
    {
      place: 'Vestorly',
      title: 'Front-End Engineering Intern',
      notes: [
        'Met with stakeholders, planned a roadmap, and designed the UI for a calendar of scheduled newsletters by the user',
        'Used Ember.js and open-source addons to create the single-page viewing and scheduling calendar'
      ]
    },
    {
      place: 'ADI: Labs',
      title: 'Full Stack Developer',
      notes: [
        'Created a marketplace for searching, wishlisting, and swapping textbooks using Flask, Bootstrap, and MongoDB',
        'Constructed a REST API for posting and reading college course reviews through Facebook Messenger'
      ]
    },
    {
      place: 'UTSW Medical Center',
      title: 'Engineering Research Intern',
      notes: [
        'Programmed a LabVIEW app for the control and visualization of a custom motion device for studying MRI errors',
        'Published research in the peer-reviewed Journal of Magnetic Resonance (DOI 10.1002/mrm.25903)'
      ]
    },
  ]

  return (
    <div className="MyExperience">
      <SectionHeader img={MyExperienceImage} imgAlt="Circuit board" title="Experience" anchor="experience">
        {experiences.map(({place, title, notes}) => (
          <div className="MyExperience__ExperienceWrapper" key={place}>
            <h3 className="MyExperience__ExperiencePlace">{place}</h3>
            <span className="MyExperience__ExperienceTitle">{title}</span>
            <ul className="MyExperience__ExperienceNotes">
              {notes.map(note => (
                <li className="MyExperience__ExperienceNote" key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </SectionHeader>      
    </div>
  );
}

export default MyExperience;
