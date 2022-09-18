import React from 'react';
import 'components/sections/ProjectList/ProjectList.scss';
import ProjectListImage from 'img/ProjectList.jpg';
import SiteImage from 'img/Project-Site.jpg';
import HammerspoonImage from 'img/Project-Hammerspoon.jpg';
import DotfilesImage from 'img/Project-Dotfiles.jpg';
import PoseImage from 'img/Project-Pose.jpg';
import MusicImage from 'img/Project-Music.jpg';

import SectionHeader from 'components/sections/SectionHeader/SectionHeader';
import TextLink from 'components/navigation/TextLink/TextLink';
import TextRepeater from 'components/text/TextRepeater/TextRepeater';

function ProjectList() {
  const projects = [
    {
      image: SiteImage,
      alt: 'A profile picture of Quinn Torres',
      title: 'quinntorres.com',
      link: `${process.env.REACT_APP_GITHUB}/quinntorres-dot-com`,
      notes: [
        'This website!',
        'Built with React.js',
      ]
    },
    {
      image: HammerspoonImage,
      alt: 'A screenshot of the menu bar timer in use',
      title: 'Hammerspoon + Alfred Menu Bar Timer',
      link: `${process.env.REACT_APP_GITHUB}/hs-menu-bar-pom-timer`,
      notes: [
        'Minimalist timer for the macOS menu bar',
        'Pause, add/subtract time, run a pomodoro, add a label',
        'Easy keyboard control using Alfred'
      ]
    },
    {
      image: DotfilesImage,
      alt: 'A filing cabinet',
      title: 'Dotfiles',
      link: `${process.env.REACT_APP_GITHUB}/dotfiles`,
      notes: [
        'Simple, scripted setup for a new computer',
        'Restore apps and their preferences, command line tools, and OS settings'
      ]
    },
    {
      image: PoseImage,
      alt: 'A demonstration of a person making a pose with their arms in order to control a robot',
      title: 'Mirroring Body Poses with a Fetch Robot Using PoseNet',
      link: `${process.env.REACT_APP_GITHUB}/university-project--humanoid-robots`,
      notes: [
        'University project for Humanoid Robots',
        'Implements PoseNet, webcam-based pose recognition software',
        'Custom API to connect PoseNet (deployed web app) to Fetch robot (Linux emulation)',
      ]
    },
    {
      image: MusicImage,
      alt: 'A tiled list of profile pictures of the artist Drake',
      title: 'Auto-generating Collage-esque Music Videos from an Artist\'s Catalog',
      link: `${process.env.REACT_APP_GITHUB}/university-project--visual-databases`,
      notes: [
        'University project for Visual Databases',
        'Implements Dlib\'s facial pose and recognition software',
        'Recognizes an artist across music videos, standardizes frames of their face, and creates a new music video with those frames'
      ]
    },
  ];

  return (
    <div className="App__Section ProjectList">
      <TextRepeater text={process.env.REACT_APP_PROJECTS_TITLE} count={20} />

      <SectionHeader
          img={ProjectListImage}
          imgAlt="A computer with code on the screen"
          title={process.env.REACT_APP_PROJECTS_TITLE}
          anchor={process.env.REACT_APP_PROJECTS_ANCHOR}>
        {projects.map(({image, alt, title, link, notes}) => (
          <div className="ProjectList__Wrapper" key={title}>
            <img className="ProjectList__Image" src={image} alt={alt} />

            <div className="ProjectList__Summary">
              <TextLink href={link}>{title}</TextLink>
            </div>

            <ul className="ProjectList__Notes">
              {notes.map(note => (
                <li className="ProjectList__Note" key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </SectionHeader>
    </div>
  );
}

export default ProjectList;
